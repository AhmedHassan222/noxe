import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor( private _AuthService:AuthService, private _Router:Router) { }
  errorMessage:string=''
  isLoading:boolean=false
  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.pattern('[a-zA-Z]{4,}[0-9]{4,}'),Validators.required])
  })

  submitLoginForm(loginForm:FormGroup ){
    this.isLoading=true
    if(loginForm.valid){
      this._AuthService.signIn(loginForm.value).subscribe({
        next:(response)=> {
          if (response.message=="success") {
            this.isLoading=false
            localStorage.setItem("userToken",response.token)
            this._AuthService.saveUserData()
            this._Router.navigate(['/home'])
          } else {
            this.errorMessage=response.message
            this.isLoading=false
            console.log('no');
            
            
          }
        }
      })
    }
  }
  goRegister(){
    this._Router.navigate(['/register'])
  }
  ngOnInit(): void {

  }
}


