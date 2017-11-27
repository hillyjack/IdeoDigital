import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers:[DataService]
})
export class BooksComponent implements OnInit {
  myData: Array<any>;
  constructor(private dataService: DataService) { }

  ngOnInit() {    
    this.dataService.fetchData()
    .subscribe(
      res => this.myData = res,
      error => alert(error),
      () => console.log ("Finished")
    );
  }

}
