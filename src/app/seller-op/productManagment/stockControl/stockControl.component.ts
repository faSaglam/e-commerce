import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/models/product';
import { ProductService } from 'src/services/product.service';
import { Router } from '@angular/router';
import { SellerAuthService } from 'src/services/sellerAuth.service';
import { SellerOpService } from 'src/services/seller-op.service';

@Component({
  selector: 'app-stockControl',
  templateUrl: './stockControl.component.html',
  styleUrls: ['./stockControl.component.css'],
  providers: [ProductService],
})
export class StockControlComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private sellerOpServive: SellerOpService,
    private sellerAuthService: SellerAuthService,
    private router: Router
  ) {}
  products: any;
  product?: Product;
  currentSeller: any;
  seller: any;

  ngOnInit() {
    this.getProductsBySellerId();
  }

  getProductsBySellerId() {
    this.currentSeller = this.sellerAuthService.getCurrentSellerId();
    this.sellerOpServive
      .getProductsBySellerId(this.currentSeller)
      .subscribe((data) => {
        this.products = data;
      });
  }
  deleteProduct(id: any) {
    if (window.confirm('Do you want to delete product?')) {
      this.sellerOpServive.deleteProduct(id).subscribe();
      console.log(id);
      window.location.reload();
    }
  }
  updateProduct(product: any) {
    this.router.navigate(['seller/productmanagment/updateproduct'], {
      state: { data: product },
    });
  }
}
