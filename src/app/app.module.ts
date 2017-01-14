import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BooksService} from "./books.service";
import {AngularFireModule, FirebaseAppConfig} from "angularfire2";

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyDIsA68YcrULjJ6XSBkeXNlvKGHMbM8Ej8',
  authDomain: 'nifty-field-101400.firebaseapp.com',
  databaseURL: 'https://nifty-field-101400.firebaseio.com',
  storageBucket: 'gs://nifty-field-101400.appspot.com',
  messagingSenderId: '881330966449'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
