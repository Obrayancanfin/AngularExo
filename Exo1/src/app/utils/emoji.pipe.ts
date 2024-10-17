import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji',
  standalone: true
})
export class Emoji implements PipeTransform {

  transform(value:boolean): string {
    return (value)?"👍":"👎";
  }

}
