import { Component } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comparing-heroes',
  templateUrl: './comparing-heroes.component.html',
  styleUrls: ['./comparing-heroes.component.scss']
})
export class ComparingHeroesComponent {
  loading = true;
  firstHero: Hero | undefined;
  secondHero: Hero | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.firstHero = params['firstHeroName'] as Hero;
      this.secondHero = params['secondHeroName'] as Hero;
    });
  }

}
