import { Component } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-hero-comparison',
  templateUrl: './hero-comparison.component.html',
  styleUrls: ['./hero-comparison.component.scss']
})
export class HeroComparisonComponent {
  loading = true;
  firstHero: Hero | undefined;
  secondHero: Hero | undefined;


  showProperties = this.propertyService.showProperties;


constructor(
  private heroService: HeroService,
  private route: ActivatedRoute,
  private propertyService: PropertyService,
  ){}


ngOnInit(): void {
  console.log("ngOnit from comparison hero component");
  this.route.paramMap.subscribe((params) => {
    const heroName1 = params.get('heroName1');
    console.log('hero 1 ' + heroName1)
    const heroName2 = params.get('heroName2');
    console.log('hero 2 ' + heroName2)
    if (heroName1 && heroName2) {
      this.getFirstHero(heroName1);
      this.getSecondHero(heroName2);
    }
  });
}


  getFirstHero(heroName: string): void {
    this.loading = true;
    console.log('first hero component log')
    console.log('hero component' + this.firstHero?.name);
    console.log('loading : ' + this.loading);
    this.heroService.getHero(heroName)
      .subscribe((hero: Hero | undefined) => {
        if (hero) {
          this.firstHero = hero;
          this.loading = false;
        }
        console.log('loading  : ' + this.loading);
      });

    };

    getSecondHero(heroName: string): void {
      this.loading = true;
      console.log('secondo hero component log')
      console.log('hero component' + this.secondHero?.name);
      console.log('loading : ' + this.loading);
      this.heroService.getHero(heroName)
        .subscribe((hero: Hero | undefined) => {
          if (hero) {
            this.secondHero = hero;
            this.loading = false;
          }
          console.log('loading  : ' + this.loading);
        });

      };


      onPropertySelection(selectedProperties:string[]) {
        this.showProperties = selectedProperties.map(name => ({ name, checked: true }));
      }
}
