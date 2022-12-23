import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-filterResults',
  templateUrl: './filterResults.component.html',
  styleUrls: ['./filterResults.component.css'],
})
export class FilterResultsComponent implements OnInit {
  constructor(private productService: ProductService) {}
  searchInputValue!: string;
  products: any;

  get value() {
    this.ngOnInit();
    return this.searchInputValue;
  }

  ngOnInit() {
    this.getSearchInputValue();
    this.getAllProducts();
  }
  getSearchInputValue() {
    this.searchInputValue = history.state.data;
    console.log(this.searchInputValue);
  }
  getAllProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }
}
