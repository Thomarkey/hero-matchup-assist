import { Component } from '@angular/core';
import { HeroService } from './services/hero.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Select your hero";  
  heroName!: string;
  propertiesZScores!: Map<string, Map<string, number>>;


  constructor(private heroService: HeroService){}

  ngOnInit() {
    this.heroService.getAllHeroesPropertiesZScores().subscribe(data=> {
        this.propertiesZScores = data;
        console.log(this.propertiesZScores);
      });
  }
  
  
  
  

  
  
}
