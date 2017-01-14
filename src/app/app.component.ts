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

  constructor(private booksService: BooksService) {
  }

  search(query: string) {
    this.booksService.list(query)
      .subscribe(console.log);
  }
}
