import { Component } from '@angular/core';
import { HeroService } from './services/hero/hero.service';
import { SharedService } from './services/shared/shared.service';
import { PropertiesZScoresService } from './services/shared/properties-zscores.service';
import { PropertyService } from './services/property/property.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private sharedService: SharedService, private heroService: HeroService, private propertiesZScoresService: PropertiesZScoresService, private propertyService: PropertyService) { }

  title = "Select your hero";
  firstHero: string | undefined;
  // propertiesZScores!: Map<string, Map<string, number>>;

  ngOnInit() {
    this.heroService.getAllHeroesPropertiesZScores().subscribe(data => {
      this.propertiesZScoresService.setPropertiesZScores(data);
      // this.propertiesZScores = data;
      console.log("getAllHeroesPropertiesZScores : ");
      console.log(data);
    });

    this.heroService.getAllHeroesMinMaxPropertiesValues().subscribe(data => { this.propertyService.setPropertiesValues(data); })
  }

  resetComparison() {
    const isComparing = false;
    this.sharedService.setComparingStatus(isComparing);
  }

}
