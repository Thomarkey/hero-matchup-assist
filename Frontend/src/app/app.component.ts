import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Select your hero";  
  heroName!: string;

  constructor(){
  }

  displayValue: string="";
  getValue(value: string){
    this.displayValue=value;
    return value;
  }

}
