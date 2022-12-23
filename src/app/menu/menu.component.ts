import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/models/category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [CategoryService],
})
export class MenuComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}
  categories: Category[] = [];

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
