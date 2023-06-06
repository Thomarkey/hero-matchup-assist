import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero-property-checkboxes',
  templateUrl: './hero-property-checkboxes.component.html',
  styleUrls: ['./hero-property-checkboxes.component.scss']
})
export class HeroPropertyCheckboxesComponent {
  @Input() showProperties: { name: string; checked: boolean }[] = [];
  @Output() selectedProperties = new EventEmitter<string[]>();
  showPropertyOptions: boolean = true;

  toggleProperty(property: any): void {
    property.checked = !property.checked;
  }

  toggleShowProperties(): void {
    this.showPropertyOptions = !this.showPropertyOptions;
  }

}
