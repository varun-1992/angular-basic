import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elmtRef:ElementRef) {}

  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click',['$event']) toogleOpen(){
    this.isOpen = this.elmtRef.nativeElement.contains(event.target) ? !this.isOpen: false;
  }
}
