import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor( private _AuthService:AuthService, private _Router:Router) { }
  errorMessage:string=''
  isLoading:boolean=false
  registerForm:FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    password: new FormControl(null,[Validators.pattern('[a-zA-Z0-9]{4,}'),Validators.required]),
    rePassword: new FormControl(null,[Validators.pattern('[a-zA-Z0-9]{4,}'),Validators.required]),
    email: new FormControl(null,[Validators.email,Validators.required]),
    phone: new FormControl(null,[Validators.pattern('^01[0 1 2 5][0-9]{8}$'),Validators.required]),
  })

  register(registerForm:FormGroup ){
    this.isLoading=true
    if(registerForm.valid){
      this._AuthService.signUp(registerForm.value).subscribe({
        next:(response)=>{
          if (response.message==='success') {
            this.isLoading=false
            this._Router.navigate(['/logIn'])
          } else {
            this.errorMessage=response.message
            this.isLoading=false
            
          }
        }
      })
    }
  }
  goLogin(){
    this._Router.navigate(['/logIn'])
  }
  ngOnInit(): void {

  }

}
