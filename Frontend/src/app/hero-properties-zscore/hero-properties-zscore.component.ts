import { HeroService } from '../services/hero/hero.service';
import { Component, Input } from '@angular/core';
import { PropertiesZScoresService } from '../services/shared/properties-zscores.service';
import { PropertyService } from '../services/property/property.service';

@Component({
  selector: 'app-hero-properties-zscore',
  templateUrl: './hero-properties-zscore.component.html',
  styleUrls: ['./hero-properties-zscore.component.scss']
})
export class HeroPropertiesZscoreComponent {

  // @Input() firstHero: any;
  @Input() hero: any;
  @Input() propertyName!: string
  @Input() propertyValue: number | undefined;
  minMaxPropertyValues!: Map<string, Map<string, number>>;
  heroZScore: number | undefined;
  loading = true;
  minZScore: number | undefined;
  maxZScore: number | undefined;
  minPropertyValue: number | undefined;
  maxPropertyValue: number | undefined;
  markerPosition: number | undefined;
  updatetMarkerPosition: number | undefined;
  easyMarkerPosition: number | undefined;
  hovering: boolean = false;

  constructor(private heroService: HeroService, private propertiesZScoresService: PropertiesZScoresService, private propertyService: PropertyService) { }


  ngOnInit(): void {
    if (this.hero && this.hero.displayName) {
      this.getHeroZScores(this.hero?.displayName, this.propertyName!);
    }
    this.minMaxPropertyValues = this.propertyService.getPropertiesValues();
  }

  ngOnChanges() {
    console.log("property checked for: ", this.propertyName!);
    this.getHeroZScores(this.hero?.displayName, this.propertyName!);
  }

  getHeroZScores(heroName: string, propertyName: string): void {
    this.loading = true;
    this.heroService.getHeroPropertyZScore(heroName, propertyName)
      .subscribe((zScore: number | undefined) => {
        if (zScore !== undefined) {
          this.heroZScore = zScore;
          // this.calculateMarkerPosition(zScore, propertyName);
          // this.calculateUpdatetMarkerPosition(zScore, propertyName);
          this.calculateEasyMarkerPosition(propertyName);
        }
        this.loading = false;
      });

  };

  calculateMarkerPosition(zScore: number, propertyName: string): void {
    const zScoresMap = this.propertiesZScoresService.getPropertiesZScoresMap();
    if (zScoresMap) {
      const propertyZScoresArray: number[] = [];
      const zScoresEntries = Object.entries(zScoresMap);

      for (const [, heroZScoresMap] of zScoresEntries) {
        if (heroZScoresMap.hasOwnProperty(propertyName)) {
          const propertyZScore = heroZScoresMap[propertyName];
          if (typeof propertyZScore === 'number') {
            propertyZScoresArray.push(propertyZScore);
          }
        }
      }

      const allZScoresArray = [...propertyZScoresArray, zScore];
      this.minZScore = Math.min(...allZScoresArray);
      this.maxZScore = Math.max(...allZScoresArray);

      if (this.minZScore === this.maxZScore) {
        this.markerPosition = 0.5;
      } else {
        this.markerPosition = (zScore - this.minZScore) / (this.maxZScore - this.minZScore);
      }

    }
  }

  calculateUpdatetMarkerPosition(zScore: number, propertyName: string): void {
    const zScoresMap = this.propertiesZScoresService.getPropertiesZScoresMap();
    if (zScoresMap) {
      const propertyZScoresArray: number[] = [];
      const zScoresEntries = Object.entries(zScoresMap);

      for (const [, heroZScoresMap] of zScoresEntries) {
        if (heroZScoresMap.hasOwnProperty(propertyName)) {
          const propertyZScore = heroZScoresMap[propertyName];
          if (typeof propertyZScore === 'number') {
            propertyZScoresArray.push(propertyZScore);
          }
        }
      }

      const minZScore = Math.min(...propertyZScoresArray);
      const maxZScore = Math.max(...propertyZScoresArray);

      // Normalize the Z-score within the range of 0 to 1
      const normalizedZScore = (zScore - minZScore) / (maxZScore - minZScore);

      this.updatetMarkerPosition = normalizedZScore;
    }
  }


  calculateEasyMarkerPosition(propertyName: string): void {
    const minMaxPropertyValuesMap = new Map<string, Map<string, number>>();

    for (const [key, value] of Object.entries(this.minMaxPropertyValues!)) {
      minMaxPropertyValuesMap.set(key, value);
    }

    const minMaxPropertyValuesObj = minMaxPropertyValuesMap.get(propertyName);
    console.log(minMaxPropertyValuesObj);

    if (minMaxPropertyValuesObj) {

      this.minPropertyValue = minMaxPropertyValuesObj ? Object.entries(minMaxPropertyValuesObj)[0][1] : {};
      this.maxPropertyValue = minMaxPropertyValuesObj ? Object.entries(minMaxPropertyValuesObj)[1][1] : {};

      console.log('Min:', this.minPropertyValue);
      console.log('Max:', this.maxPropertyValue);
      console.log('current:', this.propertyValue);

      if (this.minPropertyValue === this.maxPropertyValue) {
        this.easyMarkerPosition = 0.5;
      } else {
        this.easyMarkerPosition = (Number(this.propertyValue) - Number(this.minPropertyValue)) / (Number(this.maxPropertyValue) - Number(this.minPropertyValue));
      }
      console.log('marker position : ', this.easyMarkerPosition)
    }

  }


  showZScore(): void {
    this.hovering = true;
  }

  hideZScore(): void {
    this.hovering = false;
  }
}
