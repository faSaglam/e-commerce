import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Product } from 'src/models/product';
import { ProductService } from 'src/services/product.service';
import { SellerOpService } from 'src/services/seller-op.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private sellerOpService: SellerOpService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  product!: Product;
  productUpdateForm?: FormGroup;

  ngOnInit() {
    this.getProduct();
    this.createUpdateForm();
  }
  createUpdateForm() {
    this.productUpdateForm = this.formBuilder.group({
      id: [this.product.id],
      productName: [this.product?.productName, Validators.required],
      stock: [this.product?.stock, Validators.required],
      defination: [this.product?.defination, Validators.required],
      unitPrice: [this.product?.unitPrice, Validators.required],
      categoryId: [this.product?.categoryId, Validators.required],
      photoUrl: [this.product?.photoUrl, Validators.required],
      sellerId: [this.product.sellerId],
      sellerName: [this.product.sellerName],
    });
  }

  getProduct() {
    this.product = history.state.data;
    console.log(this.product);
  }
  update() {
    if (this.productUpdateForm?.valid) {
      this.product = Object.assign({}, this.productUpdateForm.value);
      console.log(this.product);
      this.sellerOpService.updateProduct(this.product).subscribe();
      this.router.navigateByUrl('seller/productmanagment/stock');
    }
  }
}
