import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  
  
    constructor(private http: Http) {}
  
    fetchData(){
      return this.http.get('https://my-json-server.typicode.com/hillyjack/DataBase/BooksDb')
      .map(response => response.json())
    }

    addBook(){}
}
