import {Component} from '@angular/core';
import {BooksService, Book} from "./books.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular2 - HackArizona';
  books: Observable<Book[]>;

  constructor(private booksService: BooksService) {
  }

  search(query: string) {
    this.books = this.booksService.list(query);
  }
}
