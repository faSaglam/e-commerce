import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginCustomer } from 'src/models/loginCustomer';
import { RegisterCustomer } from 'src/models/registerCustomer';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CustromerAuthService {
  constructor(private http: HttpClient, private router: Router) {}
  customerToken: any;
  decodedToken: any;
  jwtHelper: JwtHelperService = new JwtHelperService();
  path = environment.baseUrl;

  //localstorage işlemleri
  saveToken(token: any) {
    localStorage.setItem('token', token);
  }

  //login-logout -- loggedin

  login(loginCustomer: LoginCustomer) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.http
      .post(this.path + '/Customer/login', loginCustomer, {
        responseType: 'text',
      })
      .subscribe((data) => {
        this.saveToken(data);
        this.customerToken = data;
        this.decodedToken = this.jwtHelper.decodeToken(data.toString());
      });
  }
  loggedIn() {
    const token: string | null = localStorage.getItem('token');
    if (token == null) {
      return false;
    } else {
      return true;
    }
  }
  logOut() {
    localStorage.removeItem('token');
  }
  get token() {
    return localStorage.getItem('token');
  }
  getCurrentCustomerId() {
    if (this.token) {
      return this.jwtHelper.decodeToken(this.token?.toString()).nameid;
    }
    return;
  }
  //register
  register(registerCustomer: RegisterCustomer) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.http
      .post(this.path + '/Customer/register', registerCustomer, {
        headers: headers,
      })
      .subscribe(
        (response) => {
          alert('Registration completed successfully ');
          this.router.navigateByUrl('/login');
        },
        (error) => {
          alert('Email address or username already exists');
          this.router.navigateByUrl('customer/register');
        }
      );
  }
}
