import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/providers/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  m:string=""
  apiflag:boolean=false
  constructor(private _ser:ServicesService,private _router:Router) { }

  ngOnInit(): void {
  }
  handleRegister(registerForm:NgForm):void{
    if (registerForm.valid) {
      this._ser.registerUser(registerForm.value).subscribe(data=>{
      },
        (err)=>{
          console.log(err)
          this.m="can not register"
            this.apiflag=false
      },
      ()=>{

        registerForm.resetForm()
        this.m="data added successfully"
        this.apiflag=true
        this._router.navigateByUrl("/register")
      }
      )
    }
  }

}
