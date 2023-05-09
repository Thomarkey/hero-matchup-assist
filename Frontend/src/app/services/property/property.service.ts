import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PropertyService {
  showProperties = [
    { name: 'startingArmor', checked: true },
    { name: 'startingMagicArmor', checked: true },
    { name: 'startingDamageMin', checked: true },
    { name: 'startingDamageMax', checked: true },
    { name: 'attackRange', checked: true },
    { name: 'moveSpeed', checked: true },
  ];
}
