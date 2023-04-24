import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  heroName: string | undefined;

  constructor(){
    this.title = "Select your hero"
  }

  displayValue:string="";
  getValue(value:string){
    this.displayValue=value;
    return value;
  }

}
