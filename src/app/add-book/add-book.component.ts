import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

		fG:FormGroup;
		text='';
  constructor(public bookService:BookService) { }

  public addBook(){

  	if(this.fG.valid){
  	this.bookService.add(this.fG.get('nameControl').value,this.fG.get('authorControl').value,this.fG.get('yearControl').value);

		this.fG.reset();
		this.text='Книга добавлена!';
	}
	else
	{
		
		this.text='Заполните все поля без ошибок!'
	}
  }
	

  ngOnInit() {
  	this.fG = new FormGroup({
    nameControl: new FormControl('', [Validators.required, Validators.pattern('[A-ZА-Я].*')]),
    authorControl: new FormControl('', [Validators.required]),
    yearControl: new FormControl('', [Validators.required,Validators.pattern('[1-9][0-9]?[0-9]?[0-9]?')])
  });
  }

}
