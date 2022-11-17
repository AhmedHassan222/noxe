import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(TrendingMovies:any[],terms:string): any[] {
    return TrendingMovies.filter((movie)=>movie.title.toLowerCase().includes(terms.toLocaleLowerCase()));
    
  }

}
