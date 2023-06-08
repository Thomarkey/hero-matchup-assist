import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroService } from '../services/hero/hero.service';
import { Hero } from '../hero';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PropertyService } from '../services/property/property.service';
import { SharedService } from '../services/shared/shared.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})

export class HeroComponent {
  loading = true;
  heroName: string | undefined;
  // hero: Hero | undefined;
  secondHero: Hero | undefined;
  isComparing = false;

  showProperties = this.propertyService.showProperties;

  private readonly destroyed$ = new Subject<void>();

  @Input() hero?: Hero;
  @Output() heroSelectedEvent = new EventEmitter<{ firstHero: Hero, secondHero: Hero }>();

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    public sharedService: SharedService
  ) {
    this.sharedService.isComparing$.subscribe(isComparing => {
      this.isComparing = isComparing;
    });
  }

  onPropertySelection(selectedProperties: string[]) {
    this.showProperties = selectedProperties.map(name => ({ name, checked: true }));
  }

  onHeroSelection(firstHero: Hero, secondHero: Hero) {
    this.secondHero = secondHero;
    this.sharedService.setComparingStatus(true);
    console.log("isComparing : " + this.isComparing);
    this.heroSelectedEvent.emit({ firstHero: firstHero, secondHero });
  }

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe(async (params: ParamMap) => {
      this.heroName = params.get('firstHero')!;
      if (this.heroName) {
        this.hero = await this.getHero(this.heroName);
        console.log('hero retrieved', this.hero);
      }
    });
  }



  async getHero(heroName: string): Promise<Hero | undefined> {
    try {
      const hero = await this.heroService.getHero(heroName).toPromise();
      console.log('hero retrieved in getHero', hero);

      return hero;
    } catch (error) {
      console.error('Error retrieving hero', error);

      return undefined;
    }
    finally {
      this.loading = false;
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }


}

