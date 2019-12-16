import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import {BookClass} from '../book-class';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
	
	book: BookClass;//создаем переменную book типа BookClass

  constructor(public bookService:BookService) { }

  public addBook(id,name,author,year){
  	this.book=new BookClass(id,name,author,year);
  	this.bookService.add(this.book);

  }

  ngOnInit() {
  }

}
