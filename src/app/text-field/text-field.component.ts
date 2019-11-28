import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {

	public text='';
	public isDisabled=true;

	public inputText(textInput){
		
		if(textInput.length!=0) {
		this.isDisabled=false;
		}
		else
		this.isDisabled=true;


	}

  constructor() { }

  ngOnInit() {
  }

}
