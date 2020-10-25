import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password Generator';
  password: string = '';
  useLetter:boolean = false;
  useSymbol:boolean =false;
  useNumber:boolean = false;
  length = 0;
  lengthError ='';

  submit() {
     const number = "1234567890";
     const letter = "ABCDEFGHIJKLMNOPqrstuvwxyz";
     const symbol = '!@#$%&()';
     let validChar = '';
     if (this.useLetter){
       validChar += letter;
     }
     if (this.useSymbol){
       validChar += symbol;
     }
     if (this.useNumber){
       validChar += number;
     }
     let generatedPassword = '';
     for (let i = 0; i < this.length; i++) {
          const index = Math.floor(Math.random() * validChar.length);
          generatedPassword += validChar[index];
     }
     this.password = generatedPassword;

  }

  onUseLatter() {
    this.useLetter = !this.useLetter;
  }

  onUseSymbols() {
    this.useSymbol = !this.useSymbol;
  }

  onUseNumber() {
    this.useNumber = !this.useNumber;
  }

  onChangeLength(value: string) {
     let parseLength = parseInt(value);
     if (!isNaN(parseLength)){
       this.length = parseLength;
     }

  }
}
