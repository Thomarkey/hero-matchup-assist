import { HeroService } from '../services/hero/hero.service';
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

  constructor(private heroService: HeroService) { }


  ngOnInit(): void {
    if (this.firstHero && this.firstHero.displayName) {
      this.getHeroZScores(this.firstHero?.displayName, this.propertyName!);
    }

  }

  getHeroZScores(heroName: string, propertyName: string): void {
    this.loading = true;
    this.heroService.getHeroPropertyZScore(heroName, propertyName)
      .subscribe((zScore: number | undefined) => {
        if (zScore !== undefined) {
          this.firstHeroZScore = zScore;
          // this.loading = false;
        }
      });

  };

}

