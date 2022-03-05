import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/providers/services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  m:string=''
  apiFlag:boolean=false
  isSubmitted=false
loginForm: FormGroup = new FormGroup({
  email:new FormControl('',[Validators.email,Validators.required]),
  password:new FormControl('',[Validators.required])
})
get email(){return this.loginForm.get('email')}
get password(){return this.loginForm.get('password')}
  constructor(private _ser:ServicesService,private _router:Router) { }

  ngOnInit(): void {
  }
login(){
   this.isSubmitted=true
    this.m=""
  if (this.loginForm.valid) {
    this._ser.loginUser(this.loginForm.value).subscribe(data=>{
      console.log(data)
      localStorage.setItem("ProjectToken",data.data.token)
    },
    (err)=>{
console.log(err)
          this.m="Wrong In Email Or Password "
            this.apiFlag=false
           },
    ()=>{
      this._ser.me().subscribe(
        user=>{
          this._ser.isLogin=true
          this._ser.user=user.data
        },
         (e)=>{
              this._ser.isLogin=false
              this._ser.user=null
            },
            ()=>{
              this._router.navigateByUrl("/home")
            }
          )
        }
      )
    }
  }
}
