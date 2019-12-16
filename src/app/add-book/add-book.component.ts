import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
	
  constructor(public bookService:BookService) { }

  public addBook(name,author,year){
  	this.bookService.add(name,author,year);

  }

  ngOnInit() {
  }

}
