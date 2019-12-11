import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	
  title = 'Lab3';
    constructor(
    public userService:UserService
    , public counterService:CounterService
  ){}

}
