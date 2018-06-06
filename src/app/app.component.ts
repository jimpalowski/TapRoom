import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTitle = 'Bar';
  drinks : Keg[] = [
    new Keg('Chelada Clamato', 'BudLight', 3.99, 4.5, 3, 124),
    new Keg('Light orange', 'Carlsberg', 5.99, 3.5, 1, 124),
  ];
  selectedDrink = null;
  priorityColor(currentDrink){
    if(currentDrink.priority === 3){
      return "bg-danger";
    } else if (currentDrink.priority === 2){
      return "bg-warning";
    }else {
      return "bg-info";
    }
  }

  priceColor(currentDrink){
    if(currentDrink.price > 5){
      return "bg-danger";
    } else if (currentDrink.price < 2){
      return "bg-warning";
    }else {
      return "bg-info";
    }
  }


  editDrink(currentDrink) {
    this.selectedDrink = currentDrink;
  }

  finishedEditing() {
    this.selectedDrink = null;
  }
  pourDrink(currentDrink) {
   currentDrink.pints = currentDrink.pints - 1;
  }
}
