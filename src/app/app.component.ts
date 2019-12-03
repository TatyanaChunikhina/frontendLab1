import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab2';

  evens: string[] = [];
  odds: string[] = [];

  updateGameState(num){
   
    if ( num % 2 === 0) {
      this.evens.push(`even-${num}`);
    } else {
      this.odds.push(`odd-${num}`);
    }
  }
}
