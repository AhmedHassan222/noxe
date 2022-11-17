import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-deteils',
  templateUrl: './movies-deteils.component.html',
  styleUrls: ['./movies-deteils.component.scss']
})
export class MoviesDeteilsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService) { }
  movieId:string='';
  imgPrefix:string='https://image.tmdb.org/t/p/w500'
  moviShow:any=[];
  
  ngOnInit(): void {
    this.movieId=this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getMoviesDeteils(this.movieId).subscribe({
      next:(response)=> {
        this.moviShow=response
        window.scrollTo(0,0)
      }
      
    })
    
  }
  

}
