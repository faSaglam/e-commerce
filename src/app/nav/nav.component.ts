import { Component, OnInit } from '@angular/core';
import { CustromerAuthService } from 'src/services/custromerAuth.service';
import { SellerAuthService } from 'src/services/sellerAuth.service';
import { Router } from '@angular/router';
import { LayoutService } from 'src/services/layout.service';

import {
  faShoppingCart,
  faUser,
  faBoxesPacking,
  faDumpster,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(
    private customerAuthService: CustromerAuthService,
    private sellerAuthService: SellerAuthService,
    private router: Router,
    private layoutService: LayoutService
  ) {}

  mainUrl: string = 'http://localhost:4200';
  currentCustomerId: any;
  currentSellerId: any;
  pageForCustomer: boolean = false;
  pageForSeller: boolean = false;
  isLoad: boolean = false;
  productName?: string;
  //font-awesome
  faShoppingCart = faShoppingCart;
  faUser = faUser;
  faBox = faBoxesPacking;
  faDumpster = faDumpster;

  //for make responsive
  isMobileLayout: boolean = false;

  ngOnInit() {
    this.anyoneIsLoggedIn();
    this.isMobileLayout = this.layout();
    window.onresize = () => {
      this.isMobileLayout = this.layout();
    };
  }
  layout(): boolean {
    return this.layoutService.layout();
  }
  get isThereCustomer() {
    this.ngOnInit();
    return this.customerAuthService.loggedIn();
  }
  get isThereSeller() {
    this.ngOnInit();
    return this.sellerAuthService.loggedIn();
  }

  anyoneIsLoggedIn() {
    const isCustomerValid = localStorage.getItem('token');
    const isSellerValid = localStorage.getItem('tokenSeller');
    if (isCustomerValid) {
      this.getCurrentCustomerId();
    }
    if (isSellerValid) {
      this.getCurrentSellerId();
    }
  }

  getCurrentCustomerId() {
    this.currentCustomerId = this.customerAuthService.getCurrentCustomerId();
  }
  getCurrentSellerId() {
    this.currentSellerId = this.sellerAuthService.getCurrentSellerId();
  }
  logout() {
    localStorage.removeItem('token');

    window.location.reload();
  }
  logoutSeller() {
    localStorage.removeItem('tokenSeller');
    window.location.reload();
  }
  search() {
    let data = this.productName;
    console.log(data);

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['results'], {
        state: { data: data },
      });
    });
  }
}
