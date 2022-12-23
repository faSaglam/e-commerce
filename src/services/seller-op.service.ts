import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from 'src/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SellerOpService {
  constructor(private http: HttpClient) {}
  baseUrl = environment.baseUrl;

  getProductsBySellerId(id: string) {
    let url = `${this.baseUrl}/Seller/stock?id=${id}`;
    return this.http.get(url);
  }

  addProduct(product: any): Observable<Product> {
    let url = `${this.baseUrl}/Product/add`;
    return this.http.post<Product>(url, product);
  }
  deleteProduct(id: any) {
    let url = `${this.baseUrl}/Product/${id}`;
    return this.http.delete(url, id);
  }
  updateProduct(product: Product): Observable<Product> {
    let url = `${this.baseUrl}/Product/${product.id}`;
    return this.http.put<Product>(url, product);
  }
}
