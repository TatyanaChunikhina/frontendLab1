import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
	
  @Output() onNewTurn:EventEmitter<number> = new EventEmitter<number>();
  intervalID: number;

  constructor() { }

  ngOnInit() {
  }

onGameStart() {
    this.intervalID = window.setInterval(() => {
      this.onNewTurn.emit(Math.floor(Math.random()*100));
    }, 1000);
  }

onGamePause() {
    window.clearInterval(this.intervalID);
  }

}
