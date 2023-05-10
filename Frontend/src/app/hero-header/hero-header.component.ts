import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent {

  @Input() hero: Hero | undefined;
  @Input() isComparing: boolean | undefined;
  @Input() loading: boolean | undefined;


}
