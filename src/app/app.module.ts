import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { CarauselComponent } from './main/carausel/carausel.component';
import { CardListComponent } from './main/card-list/card-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomerRegisterComponent } from './customer-op/customerRegister/customerRegister.component';
import { CustomerLoginComponent } from './customer-op/customerLogin/customerLogin.component';
import { SellerLoginComponent } from './seller-op/sellerLogin/sellerLogin.component';
import { SellerRegisterComponent } from './seller-op/sellerRegister/sellerRegister.component';
import { StockControlComponent } from './seller-op/productManagment/stockControl/stockControl.component';
import { AddProductComponent } from './seller-op/productManagment/add-product/add-product.component';
import { UpdateProductComponent } from './seller-op/productManagment/update-product/update-product.component';
import { ProductManagmentComponent } from './seller-op/productManagment/productManagment.component';

import { LoginPageComponent } from './loginPage/loginPage.component';
import { FilterResultsComponent } from './filterResults/filterResults.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    CarauselComponent,
    CardListComponent,
    CategoriesComponent,
    MainComponent,
    ProductsComponent,
    CartComponent,
    CustomerRegisterComponent,
    CustomerLoginComponent,
    SellerLoginComponent,
    SellerRegisterComponent,
    ProductManagmentComponent,
    StockControlComponent,
    LoginPageComponent,
    AddProductComponent,
    UpdateProductComponent,
    FilterResultsComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
