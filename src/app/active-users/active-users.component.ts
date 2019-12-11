import { Component, OnInit, Input} from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() user:string;

  disableUser(){
  	this.userService.disable(this.user);
  	  }
  constructor(
    public userService:UserService
  ) { }

  ngOnInit() {
  }

}
