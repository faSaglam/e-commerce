import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { SellerAuthService } from 'src/services/sellerAuth.service';
import { Product } from 'src/models/product';
import { SellerOpService } from 'src/services/seller-op.service';
import { CategoryService } from 'src/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [SellerOpService],
})
export class AddProductComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private sellerOpService: SellerOpService,
    private sellerAuthService: SellerAuthService,
    private categoryService: CategoryService,
    private router: Router
  ) {}
  product!: Product;
  productAddForm?: FormGroup;

  ngOnInit() {
    this.productCreateForm();
  }

  productCreateForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ['', Validators.required],
      stock: ['', Validators.required],
      defination: ['', Validators.required],
      unitPrice: ['', Validators.required],
      categoryId: ['', Validators.required],
      photoUrl: ['', Validators.required],
      sellerId: [this.sellerAuthService.getCurrentSellerId()],
      sellerName: [this.sellerAuthService.getCurrentSellerName()],
    });
  }
  add() {
    if (this.productAddForm?.valid) {
      this.product = Object.assign({}, this.productAddForm?.value);

      this.sellerOpService.addProduct(this.product).subscribe();
      this.router.navigateByUrl('seller/productmanagment/stock');
    }
  }
}
