import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiPaths } from 'src/environments/ApiPaths.enum';
import { Product } from 'src/models/product';
import { Observable } from 'rxjs';
import { Cart } from 'src/models/cart';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  baseUrl = environment.baseUrl;
  getProductsId(id: string): Observable<Product[]> {
    let url = `${this.baseUrl}/products/${id}`;
    return this.httpClient.get<Product[]>(url);
  }
  getSingleProductById(id: string): Observable<Product> {
    let url = `${this.baseUrl}/Product/${id}`;
    return this.httpClient.get<Product>(url);
  }
  decreaseStockByOrder(cart: Cart): Observable<any> {
    let url = `${this.baseUrl}/Product`;
    return this.httpClient.patch(url, cart);
  }
  getAllProducts() {
    let url = `${this.baseUrl}/Product/All`;
    return this.httpClient.get(url);
  }
}
