import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import {BookClass} from '../book-class';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
	public id:number;
	book: BookClass;

  constructor(private route:ActivatedRoute, public bookService:BookService) { 
  	this.route.params.subscribe(params=>{this.id=params.id});
  	this.book=(this.bookService.getById(this.id));


  }

  ngOnInit() {
  }

}
