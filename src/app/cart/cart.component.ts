import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { Cart } from 'src/models/cart';
import { CartService } from 'src/services/cart.service';
import { ProductService } from 'src/services/product.service';
import { Router } from '@angular/router';
import { CustromerAuthService } from 'src/services/custromerAuth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService, ProductService],
})
export class CartComponent implements OnInit {
  carts: any;
  cartDetails: any;
  sum: any;
  product?: Product;
  currentCustomer?: any;

  constructor(
    private http: HttpClient,
    private cartService: CartService,
    private productService: ProductService,
    private router: Router,
    private customerAuthService: CustromerAuthService
  ) {}

  getCartByCustomerId() {
    this.currentCustomer = this.customerAuthService.getCurrentCustomerId();
    if (this.currentCustomer == null) {
      return;
    }
    this.cartService
      .getCartByCustomerId(this.currentCustomer)
      .subscribe((data) => {
        if (data != null) {
          console.log(data);
          this.carts = data;
          this.sumOfCart(data);
        }
      });
  }
  sumOfCart(carts: any): void {
    let x = carts.map((x: any) => x.price);
    let calculate = carts.map((c: any) => c.isOnWay);

    let y = carts.map((y: any) => y.quantity);
    let z = 0;
    for (let i = 0; i < x.length; i++) {
      if (calculate[i] == false) {
        z += x[i] * y[i];
      } else {
        z;
      }
    }

    this.sum = z;
  }

  increaseQty(
    id: any,
    quantity: any,
    isDelivered: any,
    isOnWay: any,
    price: any,
    productName: any,
    photoUrl: any
  ) {
    let item = {
      id: id,
      quantity: quantity + 1,
      isDelivered: isDelivered,
      isOnWay: isOnWay,
      price: price,
      productName: productName,
      photoUrl: photoUrl,
    };
    console.log(item);

    this.cartService.updateCartItem(item).subscribe((data) => {
      window.location.reload();

      item.id = data.id;
      item.quantity = item.quantity;
      data.isDelivered = false;
      data.isOnWay = false;
      data.price = item.price;
      data.productName = item.productName;
      data.photoUrl = item.photoUrl;
      console.log(data);
    });
  }
  decreaseQty(
    id: any,
    quantity: any,
    isDelivered: any,
    isOnWay: any,
    price: any,
    productName: any,
    photoUrl: any
  ) {
    let item = {
      id: id,
      quantity: quantity - 1,
      isDelivered: isDelivered,
      isOnWay: isOnWay,
      price: price,
      productName: productName,
      photoUrl: photoUrl,
    };
    console.log(item);

    this.cartService.updateCartItem(item).subscribe((data) => {
      window.location.reload();
      item.id = data.id;
      item.quantity = item.quantity;
      data.isDelivered = false;
      data.isOnWay = false;
      data.price = item.price;
      data.productName = item.productName;
      data.photoUrl = item.photoUrl;
      console.log(data);
    });
  }
  removeItem(id: any) {
    this.cartService.removeItem(id).subscribe();
    window.location.reload();
  }
  emptyCart(): void {
    this.carts.forEach((value: any, index: any) => {
      if (value.isOnWay == false) {
        this.cartService.removeItem(value.id).subscribe();
      }
    });
    window.location.reload();
  }
  confirmCart() {
    let cartItems = this.carts;
    console.log(cartItems);
    for (let cartItem of cartItems) {
      this.isOnWay(cartItem);
    }
  }

  isOnWay(cartItem: any) {
    if (cartItem.isOnWay == true) {
      return;
    }
    if (cartItem.isDelivered == true) {
      return;
    }
    let item = {
      id: cartItem.id,
      quantity: cartItem.quantity,
      isDelivered: cartItem.isDelivered,
      isOnWay: true,
      price: cartItem.price,
      productName: cartItem.productName,
      photoUrl: cartItem.photoUrl,
      productId: cartItem.productId,
    };

    this.cartService.updateCartItem(item).subscribe((data) => {
      data = item;
      this.isDelivered(item);
      this.productStockDecrease(item);
    });
    alert('Ürün kargoya verildi');
  }
  productStockDecrease(productItem: any) {
    let item = {
      id: productItem.productId,
      stock: productItem.quantity,
    };
    console.log(item);

    this.productService.decreaseStockByOrder(item).subscribe((data) => {
      data = item;

      console.log(data);
    });
  }
  isDelivered(cartItem: any) {
    if (cartItem.isDelivered == false && cartItem.isOnWay == true) {
      let item = {
        id: cartItem.id,
        quantity: cartItem.quantity,
        isDelivered: cartItem.isDelivered,
        isOnWay: cartItem.isOnWay,
        price: cartItem.price,
        productName: cartItem.productName,
        photoUrl: cartItem.photoUrl,
      };
      console.log('cartItem is accessed isDelivered');

      setTimeout(() => {
        // this.cartService.updateCartItem(item).subscribe((data) => {
        //   data = item;
        //   console.log('isDelivered çalıştı');
        //   console.log(data);
        // });
        alert('Sepet teslim edildi');
        this.cartService.removeItem(item.id).subscribe();

        window.location.reload();
      }, 3000);
    }
  }

  ngOnInit() {
    this.getCartByCustomerId();
  }
}
