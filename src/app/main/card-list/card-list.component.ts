import { Component, HostListener, OnInit } from '@angular/core';
import { Category } from 'src/models/category';
import { CategoryService } from 'src/services/category.service';
import { Product } from 'src/models/product';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { LayoutService } from 'src/services/layout.service';
import {
  faLaptopMedical,
  faBook,
  faDumbbell,
  faPalette,
  faPaw,
  faMugSaucer,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  providers: [CategoryService],
})
export class CardListComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private layoutService: LayoutService
  ) {}

  category!: Category;

  categories?: Category[] = [];
  currentId!: string;
  categoryId: any;
  categoryIds = [];
  electronics: Product[] = [];
  books: Product[] = [];
  sports: Product[] = [];
  hobies: Product[] = [];
  pets: Product[] = [];
  homes: Product[] = [];

  //icon
  faLaptop = faLaptopMedical;
  faBook = faBook;
  faDumbbell = faDumbbell;
  faPalette = faPalette;
  faPaw = faPaw;
  faMugSaucer = faMugSaucer;

  //responsive

  isMobileLayout = false;

  ngOnInit() {
    this.getCategories();
    this.getElectronics();
    this.getBooks();
    this.getSports();
    this.getHomes();
    this.getPets();
    this.isMobileLayout = this.layout();

    window.onresize = () => {
      this.isMobileLayout = this.layout();
    };
  }

  layout(): boolean {
    return this.layoutService.layout();
  }
  getCategories() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  getElectronics() {
    this.categoryService.getProductsByCategoryId(1).subscribe((data) => {
      if (data.length > 0) {
        return (this.electronics = data.slice(0, 6));
      }
      return;
    });
  }
  getBooks() {
    this.categoryService.getProductsByCategoryId(2).subscribe((data) => {
      if (data.length > 0) {
        return (this.books = data.slice(0, 6));
      }
      return;
    });
  }
  getSports() {
    this.categoryService.getProductsByCategoryId(3).subscribe((data) => {
      if (data.length > 0) {
        return (this.sports = data.slice(0, 6));
      }
      return;
    });
  }
  getHobies() {
    this.categoryService.getProductsByCategoryId(4).subscribe((data) => {
      if (data.length > 0) {
        return (this.hobies = data.slice(0, 6));
      }
      return;
    });
  }
  getPets() {
    this.categoryService.getProductsByCategoryId(5).subscribe((data) => {
      if (data.length > 0) {
        return (this.pets = data.slice(0, 6));
      }
      return;
    });
  }
  getHomes() {
    this.categoryService.getProductsByCategoryId(6).subscribe((data) => {
      if (data.length > 0) {
        return (this.homes = data.slice(0, 6));
      }
      return;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobileLayout = this.layout();
  }
}
