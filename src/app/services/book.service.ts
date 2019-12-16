import { Injectable } from '@angular/core';
import {BookClass} from './book-class';



@Injectable({
  providedIn: 'root'
})
export class BookService {

books: BookClass[]=[
{id:11,name:'It',author:'King',year:'1990'},
{id:12,name:'It1',author:'King1',year:'1990'},
{id:15,name:'It2',author:'King2',year:'1990'}
];

  public getById(id){
  		console.log("GET_BY_ID");

  		for(let i = 0; i < this.books.length; i++) {
  			if(this.books[i].id==id)return this.books[i];
  		}
  		return null;
  }
  public getIndexById(id){
  		console.log("GET_BY_ID");

  		for(let i = 0; i < this.books.length; i++) {
  			if(this.books[i].id==id)return i;
  		}
  		return -1;
  }

  public add(book){
  	let index:number = this.getIndexById(book.id);
    	console.log(index);
  	if(index == -1) {this.books.push(book);return true;}
  	else return false;
  }
  public delete(id){

  	let index:number = this.getIndexById(id);
    	console.log(index);
    if (index > -1) {
      this.books.splice(index, 1);
      return true;
    }
    else return false;

  }
  constructor() { }
}
