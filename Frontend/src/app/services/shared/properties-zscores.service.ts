import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesZScoresService {

  private propertiesZScores: Map<string, Map<string, number>> | undefined;

  setPropertiesZScores(data: Map<string, Map<string, number>>): void {
    this.propertiesZScores = data;
  }

  getPropertiesZScoresMap(): Map<string, Map<string, number>> | undefined {
    return this.propertiesZScores;
  }

}
