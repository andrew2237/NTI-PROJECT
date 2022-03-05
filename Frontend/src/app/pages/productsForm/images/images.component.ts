import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/providers/services.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
 m:string=""
  myImage:any
  Bookid:any
  myForm= new FormData()
  constructor(private _data:ServicesService , private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    this.Bookid=this._route.snapshot.params?.['bookid']
    }
changeFile(e:any){
    this.myImage=e.target.files[0]
    console.log(this.myImage)
  }
  addImage(imageForm:NgForm,id:any){
    this.myForm.append('img',this.myImage,this.myImage.name)
    this._data.addImage(this.myForm,id).subscribe(
      d=>console.log(d),
      (err)=>{
        console.log(err)
      },
      ()=>{
        this._router.navigateByUrl("/home")
      }
    )
  }
}
