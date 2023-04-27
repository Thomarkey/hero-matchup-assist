import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (args === 'startingArmor') {
      return value.toFixed(2);
    } else {
      return value;
    }
  }
}
