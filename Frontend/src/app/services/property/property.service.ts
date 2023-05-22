import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PropertyService {
  showProperties = [
    { name: 'startingArmor', checked: true, comparisonValue: 0 },
    { name: 'startingMagicArmor', checked: true },
    { name: 'startingDamageMin', checked: true },
    { name: 'startingDamageMax', checked: true },
    { name: 'attackRange', checked: true },
    { name: 'moveSpeed', checked: true },
    { name: 'visionDaytimeRange', checked: true },
    // { name: 'visionNighttimeRange', checked: true },
    // { name: 'moveTurnRate', checked: true },
  ];
}
