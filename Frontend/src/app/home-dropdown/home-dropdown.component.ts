import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroService } from '../services/hero/hero.service';


@Component({
  selector: 'app-home-dropdown',
  templateUrl: './home-dropdown.component.html',
  styleUrls: ['./home-dropdown.component.scss']
})

export class HomeDropdownComponent {

  heroes!: string[];
  selectedHero!: string;

  @Output() heroSelectedEvent = new EventEmitter<string>();

  selectedSecondHero: undefined;

  constructor(private heroService: HeroService) { }


  ngOnInit() {
    this.heroService.getHeroNames().subscribe(heroes => {
        this.heroes = heroes;
        console.log(heroes);
      })
  }


  heroSelected(event: Event) {
    console.log('heroSelected', (event.target as HTMLTextAreaElement).value);
    this.heroSelectedEvent.emit((event.target as HTMLTextAreaElement).value);
  }

  

}
