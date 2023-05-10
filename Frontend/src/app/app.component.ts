import { Component } from '@angular/core';
import { HeroService } from './services/hero/hero.service';
import { Hero } from './hero';
import { SharedService } from './services/shared/shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private sharedService: SharedService, private heroService: HeroService) { }

  title = "Select your hero";
  heroName: string | undefined;
  propertiesZScores!: Map<string, Map<string, number>>;
  selectedSecondHero: Hero | undefined;
  // selectedHero: Hero | undefined;


  ngOnInit() {
    this.heroService.getAllHeroesPropertiesZScores().subscribe(data => {
      this.propertiesZScores = data;
      console.log(this.propertiesZScores);
    });
  }

  resetComparison() {
    const isComparing = false;
    this.sharedService.setComparingStatus(isComparing);
  }

}
