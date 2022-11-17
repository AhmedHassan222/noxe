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
    first_name: new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    last_name: new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    age: new FormControl(null,[Validators.min(12),Validators.required]),
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.pattern('[a-zA-Z0-9]{4,}'),Validators.required])
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
