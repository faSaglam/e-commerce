import { Component, OnInit } from '@angular/core';
import { SellerAuthService } from 'src/services/sellerAuth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellerLogin',
  templateUrl: './sellerLogin.component.html',
  styleUrls: ['./sellerLogin.component.css'],
})
export class SellerLoginComponent implements OnInit {
  constructor(
    private sellerAuthService: SellerAuthService,
    private router: Router
  ) {}
  loginSeller: any = {};

  ngOnInit() {}
  login() {
    this.sellerAuthService.login(this.loginSeller);
    this.router.navigateByUrl('');
  }
  logOut() {
    this.sellerAuthService.logOut();
    this.router.navigateByUrl('');
  }
  get isAuthenticated() {
    return this.sellerAuthService.loggedIn();
  }
}
