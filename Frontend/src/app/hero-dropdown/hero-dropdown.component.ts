import { Component, EventEmitter, Output } from '@angular/core';
import { HeroService } from '../services/hero/hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-dropdown',
  templateUrl: './hero-dropdown.component.html',
  styleUrls: ['./hero-dropdown.component.scss']
})
export class HeroDropdownComponent {

  heroes!: string[];
  selectedHero: Hero | undefined;

  @Output() heroSelectedEvent = new EventEmitter<Hero>();
 

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroNames().subscribe(heroes => {
        this.heroes = heroes;
        console.log(heroes);
      })
  }

  heroSelected(event: Event) {
    const selectedHeroName = (event.target as HTMLTextAreaElement).value;
    console.log('heroSelected', selectedHeroName);
  
    this.heroService.getHero(selectedHeroName).subscribe(hero => {
      console.log(hero);
      this.heroSelectedEvent.emit(hero);
    });
  }


}
