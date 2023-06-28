import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroService } from '../services/hero/hero.service';
import { Hero } from '../hero';
import { SharedService } from '../services/shared/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-dropdown',
  templateUrl: './home-dropdown.component.html',
  styleUrls: ['./home-dropdown.component.scss']
})

export class HomeDropdownComponent {

  heroes!: string[];

  @Output() heroSelectedEvent = new EventEmitter<string>();

  constructor(private heroService: HeroService) { }


  ngOnInit() {
    this.heroService.getHeroNames().subscribe(heroes => {
      this.heroes = heroes;
    })
  }


  heroSelected(event: Event) {
    console.log('heroSelected', (event.target as HTMLTextAreaElement).value);
    this.heroSelectedEvent.emit((event.target as HTMLTextAreaElement).value);
  }


}
