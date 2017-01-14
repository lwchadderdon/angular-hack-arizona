import {Component} from '@angular/core';
import {BooksService} from "./books.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular2 - HackArizona';

  constructor(private booksService: BooksService) {
  }

  search(query: string) {
    this.booksService.list(query);
  }
}
