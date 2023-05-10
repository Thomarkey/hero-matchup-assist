import { Pipe, PipeTransform } from '@angular/core';
import { propertyMappings } from '../services/property/PropertyMappings';


@Pipe({
  name: 'transformedProperties'
})
export class TransformedPropertiesPipe implements PipeTransform {

  transform(propertyName: string): any {
    const mapping = propertyMappings[propertyName as keyof typeof propertyMappings];
    if (mapping) {
      return {displayName: mapping.displayName, icon: mapping.icon};
    } else {
      return {displayName: propertyName, icon: ''};
    }
  }
  
}
