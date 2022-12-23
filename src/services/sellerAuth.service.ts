import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginSeller } from 'src/models/loginSeller';
import { RegisterCustomer } from 'src/models/registerCustomer';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RegisterSeller } from 'src/models/registerSeller';
import { Console } from 'console';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellerAuthService {
  constructor(private http: HttpClient, private router: Router) {}
  sellerToken: any;
  decodedToken: any;
  jwtHelper: JwtHelperService = new JwtHelperService();
  path = environment.baseUrl;

  //localstorage
  saveToken(token: any) {
    localStorage.setItem('tokenSeller', token);
  }
  //login logout loggedIn
  login(loginSeller: LoginSeller) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.http
      .post(this.path + '/Seller/login', loginSeller, {
        responseType: 'text',
      })
      .subscribe((data) => {
        this.saveToken(data);
        this.sellerToken = data;
        this.decodedToken = this.jwtHelper.decodeToken(data.toString());
      });
  }
  loggedIn() {
    const token: string | null = localStorage.getItem('tokenSeller');
    if (token == null) {
      return false;
    } else {
      return true;
    }
  }
  logOut() {
    localStorage.removeItem('tokenSeller');
  }
  get token() {
    return localStorage.getItem('tokenSeller');
  }
  getCurrentSellerId() {
    return this.jwtHelper.decodeToken(this.token?.toString()).nameid;
  }
  getCurrentSellerName() {
    return this.jwtHelper.decodeToken(this.token?.toString()).unique_name;
  }
  //register
  register(registerSeller: RegisterSeller) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.http
      .post(this.path + '/Seller/register', registerSeller, {
        headers: headers,
      })
      .subscribe(
        (response) => {
          alert('Registration completed successfully ');
          this.router.navigateByUrl('/login');
        },
        (error) => {
          alert('Email address or username already exists');
          this.router.navigateByUrl('seller/register');
        }
      );
  }
}
