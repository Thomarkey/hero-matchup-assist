import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { PropertyService } from '../services/property/property.service';
import { SharedService } from '../services/shared/shared.service';

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

  constructor(private propertyService: PropertyService) { }

  onCheckboxChange(property: any) {
    property.checked = !property.checked;
    this.showPropertiesChange.emit(this.showProperties);
  }
}