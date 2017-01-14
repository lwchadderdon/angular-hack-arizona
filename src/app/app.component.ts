import {Component} from '@angular/core';
import {BooksService, Book} from "./books.service";
import {Observable} from "rxjs";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular2 - HackArizona';
  books: Observable<Book[]>;
  favorites: FirebaseListObservable<any[]>;

  constructor(private booksService: BooksService, private af: AngularFire) {
    this.favorites = af.database.list("/favorites");
  }

  search(query: string) {
    this.books = this.booksService.list(query);
  }
}
