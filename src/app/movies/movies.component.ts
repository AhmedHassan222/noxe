import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }
  pagination:any=[]
  isLoading:boolean=false;
  term:string=''
  pagenum:number[]=[1,2,3,4,5,6,7,8,9,10,11,12]
  imgPrefix:string='https://image.tmdb.org/t/p/w500'

  ngOnInit(): void {
    
    this._MoviesService.getMoviesPagenation(1).subscribe({
      next:(response)=>{
        this.pagination=response.results
      }
    })

    }
    test(num:number){
      this._MoviesService.getMoviesPagenation(num).subscribe({
        next:(response)=>{
          this.pagination=response.results
        }
      })
  }

}
