import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthInterceptor } from './providers/interceptor/auth.interceptor';
import { SliderComponent } from './pages/home/slider/slider.component';
import { Err404Component } from './pages/err404/err404.component';
import { BooksComponent } from './pages/books/books.component';
import { SinglebookComponent } from './pages/singlebook/singlebook.component';
import { ProductsComponent } from './pages/productsForm/products/products.component';
import { ImagesComponent } from './pages/productsForm/images/images.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    Err404Component,
    BooksComponent,
    SinglebookComponent,
    ProductsComponent,
    ImagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
