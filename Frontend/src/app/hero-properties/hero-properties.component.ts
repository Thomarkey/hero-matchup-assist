import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-hero-properties',
  templateUrl: './hero-properties.component.html',
  styleUrls: ['./hero-properties.component.scss']
})
export class HeroPropertiesComponent {
  @Input() hero: any;
  @Input() secondHero: any;
  @Input() selectedProperties!: any[]; 
  @Output() showPropertiesChange = new EventEmitter<any[]>();


  // showProperties = [
  //   { name: 'startingArmor', checked: true },
  //   { name: 'startingMagicArmor', checked: true },
  //   { name: 'startingDamageMin', checked: true },
  //   { name: 'startingDamageMax', checked: true },
  //   { name: 'attackRange', checked: true },
  //   { name: 'moveSpeed', checked: true },
  // ];

  showProperties = this.propertyService.showProperties;

  constructor (
    private propertyService: PropertyService,
    ){}

    onCheckboxChange(property: any) {
      property.checked = !property.checked;
      this.showPropertiesChange.emit(this.showProperties);
    }

}
