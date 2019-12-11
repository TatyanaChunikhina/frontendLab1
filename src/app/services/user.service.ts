import { Injectable } from '@angular/core';
import { CounterService } from './counter.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  activeUsers:string[] = [
    'Sveta',
    'Vova'
  ];
  
  inactiveUsers:string[]=[
    'Mariia',
    'John',
    'Julia',
    'Krab',
    'Gusinitsa'
  ];

  constructor(
    private counterService:CounterService
    ) { }

  disable(data:string){
    let index:number = this.activeUsers.indexOf(data);
    if (index > -1) {
    this.inactiveUsers.push(data);
      this.activeUsers.splice(index, 1);
    }
    this.counterService.disable++;
  }

  enable(data:string){
    let index:number = this.inactiveUsers.indexOf(data);
    if (index > -1) {
    this.activeUsers.push(data);
      this.inactiveUsers.splice(index, 1);
    }
    this.counterService.enable++;
  }

  add(data:string,flag:boolean){
  	let indexA:number = this.activeUsers.indexOf(data);
  	let indexI:number = this.inactiveUsers.indexOf(data);
  	if(indexA!=-1 || indexI != -1) return false;
  	else {
      if(flag)this.activeUsers.push(data);
      else this.inactiveUsers.push(data);
  	return true;
  	}
  }

}
