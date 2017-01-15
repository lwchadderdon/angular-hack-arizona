import {Component} from '@angular/core';
import {BooksService, Book} from "./books.service";
import {Observable} from "rxjs";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import "rxjs/add/operator/map";

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

  isFavorite(bookId: string): Observable<boolean> {
    return this.af.database.object(`/favorites/${bookId}`)
      .map(object => !!object.$value);
  }

  setFavorite(bookId: string, isFavorite: boolean) {
    if (isFavorite) {
      this.af.database.object(`/favorites/${bookId}`).set(true);
    } else {
      this.af.database.object(`/favorites/${bookId}`).remove();
    }
  }
}
