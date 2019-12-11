import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  @Input() user:string;

	enableUser(){
		this.userService.enable(this.user);
	}

  constructor(
    public userService:UserService
  ) { }

  ngOnInit() {
  }

}
