import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  length=0;

  onButtonClick(){
    
    const validLetters = 'abcdefghijklmnopqrstuvwxyz'
    const validNumbers = '1234567890'
    const validSymbols = '!@#$%&*()'

    
    let validChar = '';
    if(this.useLetters){
      validChar = validChar + validLetters;
    }
    if(this.useNumbers){
      validChar = validChar + validNumbers;
    }
    if(this.useSymbols){
      validChar = validChar + validSymbols;
    }

    let generatedPassword = '';
    for (let index = 0; index < this.length; index++) {
      let randomIndex = Math.floor(Math.random()*validChar.length);
      generatedPassword = generatedPassword + validChar[randomIndex]
    }

    this.password=generatedPassword

  }

  onChangeLength(e:any){
    console.log(e.target.value)
    const parsedValue = parseInt(e.target.value);
    if(!isNaN(parsedValue)){
      this.length=parsedValue;
    }
  }

  onChange(flag:any){

    if(flag=='letters'){
      this.useLetters = !this.useLetters
    }
    if(flag=='numbers'){
      this.useNumbers = !this.useNumbers
    }
    if(flag=='symbols'){
      this.useSymbols = !this.useSymbols
    }
  }
}
