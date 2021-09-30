import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, ...args: any[]): number {
    if (!value) return 0;

    switch (args[0]) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value;
      case 'cm':
        return value * 1000;
      default:
        return value;
    }
  }
}
