import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private elmtRef:ElementRef) { }

  @HostListener('mouseover') myFun(){
    this.elmtRef.nativeElement.style.background = 'blue'
  }
  @HostListener('mouseleave') myFunLeave(){
    this.elmtRef.nativeElement.style.background = ''
  }
}
