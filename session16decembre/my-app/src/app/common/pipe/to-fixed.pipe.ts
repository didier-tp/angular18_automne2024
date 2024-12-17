import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFixed',
  standalone: false
})
export class ToFixedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let val : number = <number> value;
    let nbDigits : number = <number> args[0] || 2;
    return val.toFixed(nbDigits);
  }

}
