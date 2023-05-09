import { Pipe, PipeTransform } from '@angular/core';
import { propertyMappings } from '../services/property/PropertyMappings';


@Pipe({
  name: 'transformedProperties'
})
export class TransformedPropertiesPipe implements PipeTransform {

  transform(propertyName: string): string {
    const mapping = propertyMappings[propertyName as keyof typeof propertyMappings];
    return mapping ? mapping.displayName : propertyName;
  }

}
