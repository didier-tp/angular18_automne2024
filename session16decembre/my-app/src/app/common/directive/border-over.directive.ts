import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBorderOver]',
  standalone: false
})
export class BorderOverDirective {

  constructor(el: ElementRef) {
       el.nativeElement.style.borderColor = 'blue';
       el.nativeElement.style.borderWidth = '2px';
       el.nativeElement.style.borderStyle = 'solid';
      
   }

}
