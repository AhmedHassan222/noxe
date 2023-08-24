import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }


  trendingMovies:any=[];
  trendingTv:any=[];
  trendingStars:any=[];
  imgPrefix:string='https://image.tmdb.org/t/p/w500'
  ngOnInit(): void {
    this._MoviesService.getTrending("movie").subscribe({
      next:(response)=> this.trendingMovies=response.results.splice(1,10)
    })
    
    this._MoviesService.getTrending("tv").subscribe({
      next:(response)=> this.trendingTv=response.results.splice(1,10)
    })
    this._MoviesService.getTrending("person").subscribe({
      next:(response)=> this.trendingStars=response.results.splice(1,10)
    })

  }
  

}
