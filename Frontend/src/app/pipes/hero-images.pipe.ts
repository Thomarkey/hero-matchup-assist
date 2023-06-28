import { Pipe, PipeTransform } from '@angular/core';
import { heroImageMappings } from '../services/hero/HeroImageMappings'

@Pipe({
  name: 'heroImages'
})
export class HeroImagesPipe implements PipeTransform {

  transform(heroName: string): any {
    const mapping = heroImageMappings[heroName as keyof typeof heroImageMappings];
    if (mapping) {
      return { cropImage: mapping.cropImage, smallImage: mapping.smallImage };
    }
  }


}