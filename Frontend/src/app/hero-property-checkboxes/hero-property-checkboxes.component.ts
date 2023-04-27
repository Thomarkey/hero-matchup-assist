import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PropertyService } from '../services/property.service';


@Component({
  selector: 'app-hero-property-checkboxes',
  templateUrl: './hero-property-checkboxes.component.html',
  styleUrls: ['./hero-property-checkboxes.component.scss']
})
export class HeroPropertyCheckboxesComponent {
  @Input() showProperties: { name: string; checked: boolean }[] = [];
  @Output() selectedProperties = new EventEmitter<string[]>();
  selected: string[] = [];

  toggleProperty(property: any) {
    property.checked = !property.checked;
    console.log(this.showProperties);
    console.log(property.checked);

    // this.ngOnChanges();
  }

  // ngOnChanges() {
  //   this.selected = this.showProperties
  //     .filter((property) => property.checked)
  //     .map((property) => property.name);
  //   this.selectedProperties.emit(this.selected);
  // }


  
}
