import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PropertyService {

  private propertiesValues: Map<string, Map<string, number>> | undefined;


  showProperties = [
    { name: 'startingArmor', checked: true, comparisonValue: 0 },
    { name: 'startingMagicArmor', checked: true },
    { name: 'startingDamage', checked: true },
    { name: 'attackRange', checked: true },
    { name: 'moveSpeed', checked: true },
    { name: 'visionDaytimeRange', checked: true },
  ];

  setPropertiesValues(data: Map<string, Map<string, number>>): void {
    this.propertiesValues = data;
  }

  getPropertiesValues(): Map<string, Map<string, number>> {
    return this.propertiesValues!;
  }

}
