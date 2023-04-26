import { Component } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent {
  loading = true;
  heroName: string | undefined;
  hero: Hero | undefined;
  selectedHero: string = '';
  secondHeroName: string | undefined;

  showProperties = [
    { name: 'startingArmor', checked: true },
    { name: 'startingMagicArmor', checked: true },
    { name: 'startingDamageMin', checked: true },
    { name: 'startingDamageMax', checked: true },
    { name: 'attackRange', checked: true },
    { name: 'moveSpeed', checked: true },
  ];


  constructor (
    private heroService: HeroService,
    private route: ActivatedRoute,
    ){}

    ngOnInit(): void {
      console.log("ngOnit from hero component");
      this.route.paramMap.subscribe((params) => {
        this.heroName = params.get('heroName')!;
        if (this.heroName) {
          this.getHero(this.heroName);
        }
      });

      //when the component only needs to perform an action once, such as when it is initialized:
      // this.getHero(this.heroName!); 
    }


  getHero(heroName: string): void {
    this.loading = true;
    console.log('hero component log')
    console.log('hero component' + this.hero?.name);
    console.log('loading : ' + this.loading);
    this.heroService.getHero(heroName)
      .subscribe((hero: Hero | undefined) => {
        if (hero) {
          this.hero = hero;
          this.loading = false;
        }
        console.log('loading  : ' + this.loading);
      });
 
    };

}
