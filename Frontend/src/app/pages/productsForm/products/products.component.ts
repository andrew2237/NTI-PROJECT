import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Books } from 'src/app/models/books';
import { ServicesService } from 'src/app/providers/services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
m:string=''
book:Books={
      author: "",
      bookId: "",
      catgory: "",
      title: "",
      _id: ""

}
  constructor(private _data:ServicesService ,private _route:Router) { }

  ngOnInit(): void {
  }
  addProduct(productForm:NgForm,catType:string):void{
    if (productForm.valid) {
      this._data.addProduct(productForm.value,catType).subscribe(
        data=>{
          console.log(data)
          console.log(data)
          this.book=data.data
        },
        (err)=>{
          console.log(err)
          this.m="can not add product"
        },()=>{
        //productForm.resetForm()
          this._route.navigateByUrl(`/image/${this.book._id}`)
        this.m="Product added successfully"
        }

        )
    }
  }

}
