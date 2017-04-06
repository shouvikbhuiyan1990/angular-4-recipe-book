import { Directive,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[rbDropdowndir]'
})
export class DropdowndirDirective {
  constructor() { }
  @HostBinding('class.open') isOpen : boolean = false;
  @HostListener('click') clicked(){
   this.isOpen = !this.isOpen;
  }
}
