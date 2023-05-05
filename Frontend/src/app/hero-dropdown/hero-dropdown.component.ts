import { Component, EventEmitter, Output } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-dropdown',
  templateUrl: './hero-dropdown.component.html',
  styleUrls: ['./hero-dropdown.component.scss']
})
export class HeroDropdownComponent {

  heroes!: string[];
  selectedHero: Hero | undefined;
  // hero!: Hero;

  @Output() heroSelectedEvent = new EventEmitter<Hero>();
 

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    this.heroService.getHeroNames().subscribe(heroes => {
        this.heroes = heroes;
        console.log(heroes);
      })
  }

  heroSelected(event: Event) {
    const selectedHeroName = (event.target as HTMLTextAreaElement).value;
    console.log('heroSelected',selectedHeroName);
  
    this.heroService.getHero(selectedHeroName).subscribe(hero => {
      console.log(hero);
      this.heroSelectedEvent.emit(hero);
    });
  }

  
  onLookUp(selectedHeroName: string) {
    const selectedHero = 
    this.heroService.getHero(selectedHeroName).subscribe((hero: Hero | undefined) => {
      if (hero) {
        this.selectedHero = hero;
      }});
    if (selectedHero) {
      setTimeout(() => {
        this.router.navigate(['/hero', this.selectedHero!.displayName]);
      }, 0);
    }
  }

}
