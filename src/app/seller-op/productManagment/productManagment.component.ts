import { Component, OnInit } from '@angular/core';
import { StockControlComponent } from './stockControl/stockControl.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerAuthService } from 'src/services/sellerAuth.service';
import { LayoutService } from 'src/services/layout.service';

@Component({
  selector: 'app-productManagment',
  templateUrl: './productManagment.component.html',
  styleUrls: ['./productManagment.component.css'],
  providers: [StockControlComponent, AddProductComponent],
})
export class ProductManagmentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private layoutService: LayoutService,

    private sellerAuthService: SellerAuthService
  ) {}
  currentSeller?: any;

  ngOnInit() {
    this.currentSeller = this.sellerAuthService.getCurrentSellerId();
  }

  stock() {
    this.router.navigate(['stock'], { relativeTo: this.route });
  }
  add() {
    this.router.navigate(['addproduct'], { relativeTo: this.route });
  }
}
