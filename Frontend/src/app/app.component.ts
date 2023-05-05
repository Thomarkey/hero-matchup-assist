import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from './services/hero.service';
import { Hero } from './hero';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Select your hero";  
  heroName: string | undefined;
  propertiesZScores!: Map<string, Map<string, number>>;
  selectedHero: Hero | undefined;

  onHeroSelection(selectedHero: Hero){
    this.selectedHero = selectedHero;
    this.changeDetector.detectChanges();
  }
  
  constructor(private heroService: HeroService, private router: Router, private changeDetector: ChangeDetectorRef){}

  ngOnInit() {
    this.heroService.getAllHeroesPropertiesZScores().subscribe(data=> {
        this.propertiesZScores = data;
        console.log(this.propertiesZScores);
      });
  }

}
