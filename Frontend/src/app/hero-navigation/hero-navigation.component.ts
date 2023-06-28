import { Component, Input } from '@angular/core';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-hero-navigation',
  templateUrl: './hero-navigation.component.html',
  styleUrls: ['./hero-navigation.component.scss']
})
export class HeroNavigationComponent {
  @Input() hero: any;

  heroNamesList: string[] | undefined;
  currentIndex: number | undefined;

  previousHeroName: string | undefined;
  nextHeroName: string | undefined;


  constructor(private sharedService: SharedService) { }

  ngOnChanges() {
    this.sharedService.heroNamesList$?.subscribe(heroNames => {
      this.heroNamesList = heroNames;
      this.currentIndex = this.heroNamesList.indexOf(this.hero.displayName);

      const totalHeroes = this.heroNamesList.length;

      this.previousHeroName = this.heroNamesList[(this.currentIndex + totalHeroes - 1) % totalHeroes];
      this.nextHeroName = this.heroNamesList[(this.currentIndex + 1) % totalHeroes];

    });
  }

}
