import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PropertyService } from '../services/property/property.service';
import { attackTypeIcons } from '../services/shared/attack-type-icons';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent {
  @Input() hero: any;
  @Input() secondHero: any;
  @Input() isComparing?: boolean;
  @Input() selectedProperties!: any[];
  @Output() showPropertiesChange = new EventEmitter<any[]>();

  showProperties = this.propertyService.showProperties;
  attackTypeIcons = attackTypeIcons as { [key: string]: string };

  constructor(private propertyService: PropertyService) { }

  onCheckboxChange(property: any) {
    property.checked = !property.checked;
    this.showPropertiesChange.emit(this.showProperties);
  }
}