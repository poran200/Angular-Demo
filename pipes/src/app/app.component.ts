import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   name: string = '';
   payMeantDate: string = '';
   amount: number ;
   distance: number;
   car ={
     name: 'Toyota',
     model:'camery',
     year: 2011
   }
  onNameChange(changeName: string) {
    this.name = changeName;
  }

  onDateChange(changeDate: string) {
    this.payMeantDate = changeDate;
  }

  onAmountChange(value: number) {
    this.amount = value
  }

  onDistanceChange(value: number) {
     this.distance  = value;
  }
}
