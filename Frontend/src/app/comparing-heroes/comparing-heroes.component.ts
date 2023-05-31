import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero/hero.service';
import { SharedService } from '../services/shared/shared.service';
import { PropertyService } from '../services/property/property.service';


@Component({
  selector: 'app-comparing-heroes',
  templateUrl: './comparing-heroes.component.html',
  styleUrls: ['./comparing-heroes.component.scss']
})

export class ComparingHeroesComponent implements OnInit {
  loading = true;
  firstHero: Hero | undefined;
  secondHero: Hero | undefined;
  @Output() heroSelectedEvent = new EventEmitter<{ firstHero: Hero, secondHero: Hero }>();

  showProperties = this.propertyService.showProperties;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private sharedService: SharedService, private propertyService: PropertyService) { }

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe(async (params) => {
      const firstHero = params.get('firstHero');
      if (firstHero) {
        this.firstHero = await this.heroService.getHero(firstHero).toPromise();
      }
      const secondHero = params.get('secondHero');
      if (secondHero) {
        this.secondHero = await this.heroService.getHero(secondHero).toPromise();
      }
      this.loading = false;
    });
  }


  onHeroSelection(firstHero: Hero, secondHero: Hero) {
    this.secondHero = secondHero;
    this.sharedService.setComparingStatus(true);
    this.heroSelectedEvent.emit({ firstHero: firstHero, secondHero });
  }


  onPropertySelection(selectedProperties: string[]) {
    this.showProperties = selectedProperties.map(name => ({ name, checked: true }));
  }

}
