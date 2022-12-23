import { CategoriesComponent } from './categories/categories.component';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CustomerRegisterComponent } from './customer-op/customerRegister/customerRegister.component';
import { CustomerLoginComponent } from './customer-op/customerLogin/customerLogin.component';
import { SellerLoginComponent } from './seller-op/sellerLogin/sellerLogin.component';
import { SellerRegisterComponent } from './seller-op/sellerRegister/sellerRegister.component';

import { LoginPageComponent } from './loginPage/loginPage.component';
import { ProductManagmentComponent } from './seller-op/productManagment/productManagment.component';
import { StockControlComponent } from './seller-op/productManagment/stockControl/stockControl.component';
import { AddProductComponent } from './seller-op/productManagment/add-product/add-product.component';
import { UpdateProductComponent } from './seller-op/productManagment/update-product/update-product.component';
import { FilterResultsComponent } from './filterResults/filterResults.component';

export const appRoutes: Routes = [
  { path: 'category/:id', component: CategoriesComponent },
  { path: 'category/:id/products/:id', component: ProductsComponent },
  { path: 'cart/:customerid', component: CartComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'results', component: FilterResultsComponent },
  { path: 'customer/register', component: CustomerRegisterComponent },
  { path: 'customer/login', component: CustomerLoginComponent },
  { path: 'seller/login', component: SellerLoginComponent },
  { path: 'seller/register', component: SellerRegisterComponent },

  {
    path: 'seller/productmanagment',
    component: ProductManagmentComponent,
    children: [
      {
        path: 'stock',
        component: StockControlComponent,
      },
      {
        path: 'addproduct',
        component: AddProductComponent,
      },
      { path: 'updateproduct', component: UpdateProductComponent },
    ],
  },

  { path: '**', component: MainComponent },
];
