import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiPaths } from 'src/environments/ApiPaths.enum';
import { Category } from 'src/models/category';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  baseUrl = environment.baseUrl;
  getCategories(): Observable<Category[]> {
    let url = `${this.baseUrl}${ApiPaths.Category}`;
    return this.httpClient.get<Category[]>(url);
  }
  getCategoryById(id: any): Observable<Category> {
    let url = `${this.baseUrl}${ApiPaths.Category}/detail?id=` + id;
    return this.httpClient.get<Category>(url);
  }
  getProductsByCategoryId(categoryId: any): Observable<Product[]> {
    let url =
      `${this.baseUrl}${ApiPaths.Category}` +
      '/products?categoryId=' +
      categoryId;
    return this.httpClient.get<Product[]>(url);
  }
  getRawCategories(): Observable<Category[]> {
    let url = `${this.baseUrl}${ApiPaths.Category}/raw`;
    return this.httpClient.get<Category[]>(url);
  }
}
