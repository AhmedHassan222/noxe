import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-stars-details',
  templateUrl: './stars-details.component.html',
  styleUrls: ['./stars-details.component.scss']
})
export class StarsDetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService) { }
  starId:string='';
  imgPrefix:string='https://image.tmdb.org/t/p/w500'
  starShow:any=[];
  ngOnInit(): void {
    this.starId=this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getPersonDeteils(this.starId).subscribe({
      next:(response)=> {
        this.starShow=response
        window.scrollTo(0,0)
      }
    })
  }

}
