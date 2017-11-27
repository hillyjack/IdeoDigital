import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers:[DataService]
})
export class BookComponent implements OnInit {
  myData: Array<any>;
  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchData()
    .subscribe(
      res => this.myData = res,
      error => alert(error),
      () => console.log ("Finished")
    );
  }

  convertDate(bookDate){
    let dateArray=bookDate.split("-");
    let newDate = dateArray[2] + "," + dateArray[1] + "," + dateArray[0];
    
    return newDate;
  }

}
