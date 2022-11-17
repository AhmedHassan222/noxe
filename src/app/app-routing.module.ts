import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { MoviesDeteilsComponent } from './movies-deteils/movies-deteils.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { StarsDetailsComponent } from './stars-details/stars-details.component';
import { TvDeteliesComponent } from './tv-detelies/tv-detelies.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent,title:'Home Page - noxe'},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent,title:'All Movies - noxe'},
  {path:'movies-deteils/:id',canActivate:[AuthGuard],component:MoviesDeteilsComponent ,title:'Information about this movie - noxe'},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent,title:'All TV Shows - noxe'},
  {path:'logIn',component:LogInComponent,title:'LogIn page - noxe'},
  {path:'register',component:RegisterComponent,title:'Register page - noxe'},
  {path:'tv-detelies/:id',canActivate:[AuthGuard],component:TvDeteliesComponent,title:'Information about this TV show - noxe'},
  {path:'stars-detelies/:id',canActivate:[AuthGuard],component:StarsDetailsComponent,title:'Information about this TV show - noxe'},

  {path:'**',component:NotFoundComponent ,title:'Not Found page - noxe'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
