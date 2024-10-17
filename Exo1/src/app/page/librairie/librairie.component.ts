import { Component } from '@angular/core';
import { EmojiPipePipe } from '../../emoji-pipe.pipe';
import { Book } from '../../utils/type/book.type';



@Component({
  selector: 'app-librairie',
  standalone: true,
  imports: [EmojiPipePipe],
  templateUrl: './librairie.component.html',
  styleUrl: './librairie.component.css'
})
export class LibrairieComponent {
listeLivre:Book[]=[{id:0, title: 'Livre 1', author: 'Autheur 1', isRead: true},
  {id:1, title: 'Livre 2', author: 'Autheur 2', isRead: false},
  {id:2, title: 'Livre 3', author: 'Autheur 1', isRead: true},
  {id:3, title: 'Livre 4', author: 'Autheur 1', isRead: false},
  {id:4, title: 'Livre 5', author: 'Autheur 3', isRead: true}]

  toggleIsRead(book : Book) : void {
    book.isRead = !book.isRead
  }
}


