import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatCardModule, MatToolbarModule } from '@angular/material';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { DataService } from './data.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';

import { CommonModule } from '@angular/common';
import { EditBookDialogComponent } from './edit-book-dialog/edit-book-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    EditBookDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    HttpModule,
    CommonModule,
    MatDialog,
    MatDialogRef    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
