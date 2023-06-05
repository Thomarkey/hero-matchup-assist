import { Injectable } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HP_MULTIPLIER, HP_REGEN_MULTIPLIER, MAIN_HP } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})

export class PropertyService {

  private propertiesValues: Map<string, Map<string, number>> | undefined;


  showProperties = [
    { name: 'startingArmor', checked: true, comparisonValue: 0 },
    { name: 'startingMagicArmor', checked: true },
    { name: 'startingDamageMin', checked: true },
    { name: 'startingDamageMax', checked: true },
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

  calculateRawHP(hero: Hero): number {
    const rawHP = MAIN_HP + (HP_MULTIPLIER * hero.stat.strengthBase);
    return +rawHP.toFixed(2);
  }

  calculateRawHPRegen(hero: Hero): number {
    const rawHPRegen = hero.stat.hpRegen + (HP_REGEN_MULTIPLIER * hero.stat.strengthBase);
    return +rawHPRegen.toFixed(2);
  }

}
