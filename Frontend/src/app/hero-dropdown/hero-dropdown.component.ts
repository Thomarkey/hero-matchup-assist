import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroService } from '../services/hero/hero.service';
import { Hero } from '../hero';
import { SharedService } from '../services/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-dropdown',
  templateUrl: './hero-dropdown.component.html',
  styleUrls: ['./hero-dropdown.component.scss']
})
export class HeroDropdownComponent implements OnInit {

  heroes!: string[];

  @Input() firstHero: Hero | undefined;
  @Output() heroSelectedEvent = new EventEmitter<{ firstHero: Hero, secondHero: Hero }>();

  secondHero: Hero | undefined;

  constructor(private heroService: HeroService, private sharedService: SharedService, private router: Router
  ) { }


  ngOnInit() {
    this.heroService.getHeroNames().subscribe(heroes => {
      this.heroes = heroes;
      console.log(heroes);
    })
  }

  heroSelected(event: any) {
    console.log("from hero dropdown");
    const selectedHeroName = (event.target as HTMLTextAreaElement).value;
    console.log('heroSelected', selectedHeroName);
    console.log('the first hero is :' + this.firstHero?.displayName)

    this.heroService.getHero(selectedHeroName).subscribe(secondHero => {
      console.log(secondHero);
      this.secondHero = secondHero;
      this.sharedService.setSecondHero(secondHero);
      console.log("start of the emit");
      this.heroSelectedEvent.emit(
        { firstHero: this.firstHero!, secondHero });
      console.log("emit should be done now?");
      this.router.navigate(['/' + this.firstHero?.displayName + '/' + this.secondHero?.displayName]);
    });
  }
}
