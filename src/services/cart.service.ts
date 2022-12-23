import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cart } from 'src/models/cart';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  addToCart(payload: any) {
    return this.http.post(`${environment.baseUrl}/cart`, payload);
  }
  getCartItems(): Observable<Cart[]> {
    let url = `${environment.baseUrl}/cart`;
    return this.http.get<Cart[]>(url);
  }
  updateCartItem(cart: Cart): Observable<Cart> {
    return this.http.put(`${environment.baseUrl}/Cart?id=${cart.id}`, cart);
  }

  removeItem(id: any): Observable<Cart> {
    return this.http.delete(`${environment.baseUrl}/Cart/empty?id=${id}`);
  }

  getCartByCustomerId(customerId: any): Observable<Cart[]> {
    let url = `${environment.baseUrl}/Cart/customer?customerId=${customerId}`;
    return this.http.get<Cart[]>(url);
  }
}
