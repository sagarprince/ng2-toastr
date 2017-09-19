import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[toastrDirective]'
})
export class ToastrDirective {

  constructor(private el: ElementRef) {
  }

}
