import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/providers/services.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  catType:any
  books:any
  constructor(public _data:ServicesService,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.catType=this._route.snapshot.params?.['catType']
    this.showAll(this.catType)
  }
   showAll(catType:string){
    this._data.showAllBooks(catType).subscribe(
      data=>{
        this.books=data.data
        console.log(this.books)
    },
    (err)=>{
console.log(err)
    },
    ()=>{

    }
    )
  }

}
