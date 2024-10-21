import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFixed'
})
export class ToFixedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let val = <number> value ;
    let format = <string> args[0] || '2'; //2 digits by default
    let nbDigit = Number( format );
    return val.toFixed(nbDigit);
  }

}
