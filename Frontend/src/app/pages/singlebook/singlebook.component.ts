import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Books } from 'src/app/models/books';
import { ServicesService } from 'src/app/providers/services.service';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {
  book:any
  bookId:any
  buyForm:any
  q:any
  constructor(public _data:ServicesService,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.bookId=this._route.snapshot.params?.['Bookid']
    console.log(this.bookId)
    this.showBook(this.bookId)
    this.buyProduct(this.buyForm,this.bookId,this.q)
  }
  showBook(id:any){
    this._data.showBookById(id).subscribe(
      data=>{
        console.log(data)
        this.book=data.data
    },
    (err)=>{
      console.log(err)
    },
    ()=>{

    }
    )
  }
  buyProduct(buyForm:NgForm,id:string,q:number){
    this._data.buyBook(buyForm.value,id,q).subscribe(
      data=>{
        console.log(data)
        console.log(q)
      },
      (err)=>{
        console.log(err)
      },
      ()=>{

      })
  }
}
