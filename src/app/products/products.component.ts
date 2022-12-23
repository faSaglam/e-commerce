import { Component, OnInit, HostListener } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/models/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/services/cart.service';
import { Cart } from 'src/models/cart';
import { CustromerAuthService } from 'src/services/custromerAuth.service';
import { LayoutService } from 'src/services/layout.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService, CartService],
})
export class ProductsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private customerAuthService: CustromerAuthService,
    private layoutService: LayoutService
  ) {}

  product: Product | undefined;
  cart: Cart | undefined;
  carts: Cart[] = [];
  next: boolean = true;
  customerId: any;
  is1200: boolean = false;
  isExist: boolean = true;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getProduct(params['id']);
    });
    this.is1200 = this.layout1200();
    window.onresize = () => {
      this.is1200 = this.layout1200();
    };
    this.customerId = this.customerAuthService.getCurrentCustomerId();
  }
  layout1200() {
    return this.layoutService.layout1200();
  }
  getProduct(id: string) {
    this.productService.getSingleProductById(id).subscribe((data) => {
      this.product = data;
      let productStock: any = data.stock;
      console.log(productStock);
      if (productStock <= 0) {
        this.isExist = false;
        console.log(this.isExist);
      }
    });
  }
  getCart() {
    this.cartService.getCartItems().subscribe((data) => {
      this.carts = data;
    });
  }
  getCustomerCart() {
    this.cartService.getCartByCustomerId(this.customerId).subscribe((data) => {
      this.carts = data;
    });
  }

  addItemToCart(
    id: any,
    quantity: any,
    photoUrl: any,
    productName: any,
    unitPrice: any,
    customerId: any
  ) {
    let payload = {
      productId: id,
      quantity,
      photoUrl: photoUrl,
      productName: productName,
      isOnWay: false,
      isDelivered: false,
      price: unitPrice,
      customerId,
    };
    this.cartService.getCartByCustomerId(customerId).subscribe((data) => {
      this.carts = data;
      let map = data.map((x) => x.productId);

      for (let i of map) {
        if (i == payload.productId) {
          this.next = false;
          alert('Bu ürün zaten var');
        }
      }

      if (this.next) {
        alert('Ürün eklendi');
        window.location.reload();
        this.cartService.addToCart(payload).subscribe(() => {
          this.getProduct(id);
          console.log(payload);
        });
      }
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.is1200 = this.layout1200();
  }
}
