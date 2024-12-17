import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderOver]',
  standalone: false
})
export class BorderOverDirective {

  @Input("appBorderOver")
  borderColor = "blue" ; //blue by default
  //exemple d'application: <img src="favicon.ico" appBorderOver="red" />

  constructor(private el: ElementRef) {
       el.nativeElement.style.borderColor = 'blue';
       el.nativeElement.style.borderWidth = '2px';
       el.nativeElement.style.borderStyle = 'solid';
   }

   ngOnInit(){
    console.log("this.borderColor="+this.borderColor);
    this.el.nativeElement.style.borderColor = this.borderColor || "blue";
   }

   @HostBinding('style.borderColor') 
   currentBorderColor: string ="blue";

@HostListener('mouseenter')
onMouseEnter() { this.updateCurrentBorderColor(this.borderColor || "blue"); }

@HostListener('mouseleave') 
onMouseLeave() { this.updateCurrentBorderColor(null); }

private updateCurrentBorderColor(color: string | null) {
   this.currentBorderColor = color?color:'blue' ; 
}

}
