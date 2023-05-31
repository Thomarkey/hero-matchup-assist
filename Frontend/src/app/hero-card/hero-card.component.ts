import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PropertyService } from '../services/property/property.service';
import { attackTypeIcons } from '../services/shared/attack-type-icons';
import { primaryStatsIcons } from '../services/shared/primary-stats-icons';


@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent {
  @Input() hero: any;
  @Input() compareHero: any;
  @Input() isComparing?: boolean;
  @Input() selectedProperties!: any[];

  @Output() showPropertiesChange = new EventEmitter<any[]>();


  attackTypeIcons = attackTypeIcons as { [key: string]: string };
  primaryStatsIcons: { [key: number]: { icon: string, name: string } } = primaryStatsIcons;

  constructor() { }

  onCheckboxChange(property: any) {
    property.checked = !property.checked;
    this.showPropertiesChange.emit(this.selectedProperties);
  }


  getComparisonClass(propertyName: string): string {
    const heroValue = this.hero.stat[propertyName];
    const secondHeroValue = this.compareHero.stat[propertyName];

    if (heroValue > secondHeroValue) {
      return 'arrow-up';
    } else if (heroValue < secondHeroValue) {
      return 'arrow-down';
    }

    return '';
  }


}