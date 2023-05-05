import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-properties-zscore',
  templateUrl: './hero-properties-zscore.component.html',
  styleUrls: ['./hero-properties-zscore.component.scss']
})
export class HeroPropertiesZscoreComponent {

  @Input() firstHero: any;
  @Input() secondHero: any;
  @Input() propertyName: string | undefined;
  firstHeroZScore: number | undefined;
  secondHeroZScore: number | undefined;
  loading = true;

  constructor(private heroService: HeroService){}


  ngOnInit(): void {
    if (this.firstHero && this.firstHero.displayName) {
    console.log("debug this first hero =" + this.firstHero?.displayName);
    this. getFirstHeroZScores(this.firstHero?.displayName, this.propertyName!);
  } if (this.secondHero && this.secondHero.displayName){
    console.log("debug this second hero =" + this.firstHero?.displayName);
    this. getSecondHeroZScores(this.secondHero?.displayName, this.propertyName!);
  }
}

  // getHeroZScores(heroName: string, propertyName: string): void {
  //   this.loading = true;
  //   this.heroService.getHeroPropertyZScore(heroName, propertyName)
  //     .subscribe((zScore: number | undefined) => {
  //       if (zScore !== undefined) {
  //         this.zScore  = zScore ;
  //         this.loading = false;
  //       }
  //     });

  //   };


getFirstHeroZScores(heroName: string, propertyName: string): void {
  this.loading = true;
  this.heroService.getHeroPropertyZScore(heroName, propertyName)
    .subscribe((zScore: number | undefined) => {
      if (zScore !== undefined) {
        this.firstHeroZScore  = zScore ;
        // this.loading = false;
      }
    });

  };

  getSecondHeroZScores(heroName: string, propertyName: string): void {
    this.loading = true;
    this.heroService.getHeroPropertyZScore(heroName, propertyName)
      .subscribe((zScore: number | undefined) => {
        if (zScore !== undefined) {
          this.secondHeroZScore  = zScore ;
          // this.loading = false;
        }
      });
  
    };

  }

