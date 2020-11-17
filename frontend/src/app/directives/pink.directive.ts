import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[spaPink]'
})
export class PinkDirective {

  constructor(private el: ElementRef)
  {
    el.nativeElement.style.color = '#e61264'
  }

}
