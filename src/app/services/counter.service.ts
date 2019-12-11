import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
	public enable:number = 0;
  public disable:number = 0;

  public constructor() { }
}
