import { Wordcomponent } from './word.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    Wordcomponent,
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
