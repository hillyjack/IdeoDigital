import { Component, Input, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { BooksComponent } from '../books/books.component';
import { EditBookDialogComponent } from '../edit-book-dialog/edit-book-dialog.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  @Input() data: BooksComponent;

  constructor( public dialog: MatDialog ) { }

  openEditDialog(bookData): void {
    let dialogRef = this.dialog.open(EditBookDialogComponent, {
      width: '800px',
      height: '550px',
      data: {  bImgUrl: bookData.ImgUrl, bTitle: bookData.Title, bAuthor : bookData.Author, bDate: bookData.Date }
   });

    dialogRef.afterClosed().subscribe
    (result => {console.log('The dialog was closed');
    });
  }
  ngOnInit() {
  }

  convertDate(bookDate){
    let dateArray=bookDate.split("-");
    let newDate = dateArray[2] + "," + dateArray[1] + "," + dateArray[0];
    return newDate;
  }

}
