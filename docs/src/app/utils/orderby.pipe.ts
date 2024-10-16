import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby',
  standalone: true
})
export class OrderbyPipe implements PipeTransform {

  transform(listeSerie:object[],order:string): object[] {
    switch (order) {
      case "asc":
        listeSerie.sort()
        break;
    
      case "desc":
        listeSerie.sort()
        listeSerie.reverse() 
        break;
    
      default:
        listeSerie.sort()
        break;
    }
  return listeSerie;
  }

}
