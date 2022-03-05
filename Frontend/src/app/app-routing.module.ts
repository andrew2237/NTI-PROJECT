import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';
import { Err404Component } from './pages/err404/err404.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ImagesComponent } from './pages/productsForm/images/images.component';
import { ProductsComponent } from './pages/productsForm/products/products.component';
import { RegisterComponent } from './pages/register/register.component';
import { SinglebookComponent } from './pages/singlebook/singlebook.component';

const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponent},
  {path:"product",component:ProductsComponent},
  {path:"image/:bookid",component:ImagesComponent},
  {path:"category/:catType",component:BooksComponent},
   {path:"product/:Bookid",component:SinglebookComponent},

  {path:"**",component:Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
