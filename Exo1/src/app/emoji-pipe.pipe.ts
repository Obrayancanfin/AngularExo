import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojiPipe',
  standalone: true
})
export class EmojiPipePipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? '👍' : '👎';
  }

}
