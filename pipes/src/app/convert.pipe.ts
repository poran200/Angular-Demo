import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (!value){
      return '';
    }
    return parseFloat(String(value))*1.60934+'km';
  }

}
