import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { NavComponent } from 'src/app/nav/nav.component';

import { CustromerAuthService } from 'src/services/custromerAuth.service';

@Component({
  selector: 'app-customerLogin',
  templateUrl: './customerLogin.component.html',
  styleUrls: ['./customerLogin.component.css'],
})
export class CustomerLoginComponent implements OnInit {
  constructor(
    private customerAuthService: CustromerAuthService,
    private router: Router
  ) {}
  loginCustomer: any = {};

  ngOnInit() {}

  login() {
    this.customerAuthService.login(this.loginCustomer);
    this.router.navigateByUrl('/');
  }
  logOut(): void {
    this.customerAuthService.logOut();
    this.router.navigateByUrl('/login');
  }
  get isAuthenticated() {
    return this.customerAuthService.loggedIn();
  }
}
