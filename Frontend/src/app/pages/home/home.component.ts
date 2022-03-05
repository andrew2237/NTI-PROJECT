import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books } from 'src/app/models/books';
import { ServicesService } from 'src/app/providers/services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cats:any
  catId:any
  constructor(private _auth:ServicesService ,private _route:ActivatedRoute) { }

  ngOnInit(): void {
this._auth.me().subscribe(data=>console.log(data))
this.catId=this._route.snapshot.params?.['catid']
this.showAllcats()
  }
  showAllcats(){
    this._auth.showAllCats().subscribe(
      data=>{
        this.cats=data.data
        console.log(this.cats)
    },
    (err)=>{

    },
    ()=>{

    }
    )
  }
}
