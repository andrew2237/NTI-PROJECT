import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/providers/services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _auth:ServicesService ,private _router:Router) {
    this._auth.me().subscribe(
      user=>{
      this._auth.isLogin=true
      this._auth.user=user.data
      console.log('test')
    },(e)=>{
this._auth.isLogin=false
        this._auth.user=null
    },
    ()=>{
// this._router.navigateByUrl("/home")
    }
    )
  }

  ngOnInit(): void {
  }
logout(){
    this._auth.logout().subscribe(
      (data)=>{},
      (err)=>{},
      ()=>{
        this._auth.isLogin=false
        this._auth.user={}
        localStorage.removeItem("ProjectToken")
        this._router.navigateByUrl("/login")
      }
    )
  }
}
