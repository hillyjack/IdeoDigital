import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatCardModule, MatToolbarModule } from '@angular/material';

import { DataService } from './data.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';

import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    HttpModule,
    CommonModule 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
