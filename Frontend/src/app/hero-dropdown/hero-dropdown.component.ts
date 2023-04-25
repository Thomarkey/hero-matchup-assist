import { Component, EventEmitter, Output } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-dropdown',
  templateUrl: './hero-dropdown.component.html',
  styleUrls: ['./hero-dropdown.component.scss']
})
export class HeroDropdownComponent {
  heroes!: string[];

  @Output() heroSelectedEvent = new EventEmitter<string>();

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
