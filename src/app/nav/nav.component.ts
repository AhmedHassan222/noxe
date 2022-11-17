import { Component, OnInit } from '@angular/core';
import { observable  } from 'rxjs';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

observable
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private _AuthService:AuthService,private _Router:Router ) { }
  isLogin:boolean=false;

  logOut(){
    this._AuthService.signOut()
  }
  ngOnInit(): void {

    this._AuthService.userData.subscribe({
      next:()=>{
        if(this._AuthService.userData.getValue() !=null){
          this.isLogin=true;
          this._Router.navigate([''])
        }else{
          this.isLogin=false;
        }
      }
    });
  }
}
