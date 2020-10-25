import { Component } from '@angular/core';
import {lorem} from 'faker'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 randomText = lorem.sentence();
 enteredText = '';

  onInput(value:string) {
    console.log(value);
    this.enteredText = value;

  }

  compare(letter: string, enteredText: string) {
     if (!enteredText){
       return 'pending';
     }
     return  letter === enteredText ? 'correct': 'incorrect';
  }
}

