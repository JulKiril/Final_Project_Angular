import { Pipe, PipeTransform } from '@angular/core';
// import { IService} from '../interfaces';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  transform(services: Array<any>, field: string, value: string): any[] {
    if (!services) { return []; }
    if (!value || value.length === 0) { return services; }
    return services.filter(it =>
      it[field].toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
}
