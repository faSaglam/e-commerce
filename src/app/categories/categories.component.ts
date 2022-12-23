import { Component, OnInit, HostListener } from '@angular/core';
import { CategoryService } from 'src/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/models/category';
import { Product } from 'src/models/product';
import { LayoutService } from 'src/services/layout.service';
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoryService],
})
export class CategoriesComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private layoutService: LayoutService
  ) {}
  category: Category | undefined;
  products: Product[] = [];
  is990: boolean = false;
  faSort = faArrowDownShortWide;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getCategoryById(params['id']);
      this.getProductsByCategoryId(params['id']);
    });
  }
  getCategoryById(categoryId: string) {
    this.categoryService.getCategoryById(categoryId).subscribe((data) => {
      this.category = data;
    });
  }
  getProductsByCategoryId(categoryId: string) {
    this.categoryService
      .getProductsByCategoryId(categoryId)
      .subscribe((data) => {
        this.products = data;
        this.sort(event);
      });
  }
  layout990() {
    return this.layoutService.layout990();
  }
  sort(event: any) {
    switch (event.target.value) {
      case 'Low': {
        this.products = this.products?.sort(
          (low: any, high: any) => low.unitPrice - high.unitPrice
        );
        break;
      }
      case 'High': {
        this.products = this.products?.sort(
          (low: any, high: any) => high.unitPrice - low.unitPrice
        );
        break;
      }
      case 'Name': {
        this.products = this.products.sort(function (low, high) {
          if (low.productName < high.productName) {
            return -1;
          } else if (low.productName > high.productName) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      }
      case 'Sort': {
        this.products = this.products?.sort(
          (low: any, high: any) => low.id - high.id
        );
        break;
      }
    }
    return this.products;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.is990 = this.layout990();
  }
}
