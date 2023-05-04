import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-properties-zscore',
  templateUrl: './hero-properties-zscore.component.html',
  styleUrls: ['./hero-properties-zscore.component.scss']
})
export class HeroPropertiesZscoreComponent {

  @Input() hero: any;
  @Input() propertyName: string | undefined;
  zScore: number | undefined;
  loading = true;

  constructor(private heroService: HeroService){}


  ngOnInit(): void {
    console.log("debug this hero =" + this.hero?.displayName);
    this.getHeroZScores(this.hero?.displayName!, this.propertyName!);
  }

  getHeroZScores(heroName: string, propertyName: string): void {
    this.loading = true;
    this.heroService.getHeroPropertyZScore(heroName, propertyName)
      .subscribe((zScore: number | undefined) => {
        if (zScore !== undefined) {
          this.zScore  = zScore ;
          this.loading = false;
        }
      });

    };

}
