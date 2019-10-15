import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: Array<any>, searchText?: string): any {
    if(!arr) return [];
    if(!searchText) return arr;
    return arr.filter(it => (
      it.title.toLowerCase().includes(searchText.toLowerCase())
    ));
  }
}
