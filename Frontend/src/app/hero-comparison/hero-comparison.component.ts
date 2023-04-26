import { Component } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin, map } from 'rxjs';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-comparison',
  templateUrl: './hero-comparison.component.html',
  styleUrls: ['./hero-comparison.component.scss']
})
export class HeroComparisonComponent {
  loading = true;
  // hero: Hero | undefined;
  secondHero: Hero | undefined;
  firstHero: Hero | undefined;

  showProperties = [
    { name: 'startingArmor', checked: true },
    { name: 'startingMagicArmor', checked: true },
    { name: 'startingDamageMin', checked: true },
    { name: 'startingDamageMax', checked: true },
    { name: 'attackRange', checked: true },
    { name: 'moveSpeed', checked: true },
  ];



constructor(  
  private heroService: HeroService,
  private route: ActivatedRoute
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


  // // Note that if you want to compare the two heroes, you need to wait for both getHero() requests to complete before doing the comparison. 
  // // You can achieve this by using RxJS forkJoin() operator to combine both the getHero() calls into a single observable that emits an array of results when both requests complete. 
  // getHero(heroName: string): Observable<Hero> {
  //   this.loading = true;
  //   console.log('hero comparison component log');
  //   console.log('hero comparison component' + this.hero?.name);
  //   console.log('comparison loading : ' + this.loading); 

  //   return forkJoin([ this.heroService.getHero(heroName)]).pipe(
  //     map(([hero]) => {
  //       this.hero = hero;
  //       this.loading = false;
  //       console.log('comparison loading  : ' + this.loading);
  //       return hero;
  //     })
  //   );
  // }


  //In this example, forkJoin() combines the observable returned by http.get() into a single observable that emits an array of results when all requests complete. 
  //The map() operator then extracts the Hero object from the array and sets it on the hero property of the HeroService class. 
  //Finally, the loading property is set to false.

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


}
