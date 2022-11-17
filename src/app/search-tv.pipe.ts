import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTv'
})
export class SearchTvPipe implements PipeTransform {

  transform(TrendingTv:any[],terms:string): any[] {
    return TrendingTv.filter((tv)=>tv.title.toLowerCase().includes(terms.toLocaleLowerCase()));

  }

}
