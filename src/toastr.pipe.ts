import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'toastrPipe'
})
@Injectable()
export class ToastrPipe implements PipeTransform {
  transform(value: any, args: any[] = null): string {
    return value;
  }
}
