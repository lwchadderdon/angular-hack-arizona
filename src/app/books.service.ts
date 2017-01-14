import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  list(query: string) {
    // make an HTTP call to the Google Books API
    // and return an Observable of the results.

    console.log("from BooksService", query);
  }
}
