import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class BooksService {

  constructor(private http: Http) {
  }

  list(query: string): Observable<Book[]> {
    if (!query) {
      return Observable.from([]);
    }

    const search: URLSearchParams = new URLSearchParams();
    search.set("q", query);

    return this.http.get("https://www.googleapis.com/books/v1/volumes", {search})
      .map(response => {
        return response.json().items.map(item => {
          const book: Book = {
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
          };
          if (item.volumeInfo.imageLinks) {
            book.thumbnailUrl = item.volumeInfo.imageLinks.smallThumbnail;
          }
          return book;
        });
      })
  }
}

export interface Book {
  id: string,
  title: string,
  authors: string[],
  thumbnailUrl?: string,
}
