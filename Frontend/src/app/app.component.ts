import { Component, ElementRef, ViewChild} from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;  
  heroName!: string;
  hero: Hero | undefined;

  constructor(){
    this.title = "Select your hero"
  }

  displayValue: string="";
  getValue(value: string){
    this.displayValue=value;
    return value;
  }


}
