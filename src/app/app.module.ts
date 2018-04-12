import { CardComponent } from './card.component';
import { Wordcomponent } from './word.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import {ChildComponent} from './child.component';
import {ParentComponent} from './parent.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    Wordcomponent,
    BookComponent,
    PersonComponent,
    ListPersonComponent,
    ChildComponent,
    ParentComponent,
    CardComponent,
    LearnPipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
