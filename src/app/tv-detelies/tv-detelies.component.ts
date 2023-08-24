import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-tv-detelies',
  templateUrl: './tv-detelies.component.html',
  styleUrls: ['./tv-detelies.component.scss']
})
export class TvDeteliesComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService) { }
  tvId:string='';
  imgPrefix:string='https://image.tmdb.org/t/p/w500'
  tvShow:any=[];
  ngOnInit(): void {
    this.tvId=this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getTvDeteils(this.tvId).subscribe({
      next:(response)=> this.tvShow=response
    })
  }

}
