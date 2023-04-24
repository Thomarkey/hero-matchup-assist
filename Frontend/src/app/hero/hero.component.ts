import { Component, OnInit} from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../hero';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent {

  loading = true;

  heroName: string | undefined;
  hero: Hero | undefined;
  appComponent: any;


  constructor (
    private heroService: HeroService,
    private route: ActivatedRoute,
    ){}

    ngOnInit(): void {
      console.log("ngOnit from hero component");
      this.route.paramMap.subscribe((params) => {
        this.heroName = params.get('name')!;
        if (this.heroName) {
          this.getHero(this.heroName);
        }
      }); 
    }



  getHero(heroName: string): void {
    this.loading = true;
    console.log('hero component log')
    console.log('hero component' + this.hero);
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
