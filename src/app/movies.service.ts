import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(type:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    
  }
  getMoviesDeteils(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&Language=en-US`)
  }
  getTvDeteils(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&Language=en-US`)
  }
  getPersonDeteils(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&Language=en-US`)
  }
  getMoviesPagenation(numberBage:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-Us&sort_by=popularity.desc&include_adult=false&include_video=false&page=${numberBage}`)
    
  }
  getTvPagenation(numberBage:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-Us&sort_by=popularity.desc&include_adult=false&include_video=false&page=${numberBage}`)
    
  }

}