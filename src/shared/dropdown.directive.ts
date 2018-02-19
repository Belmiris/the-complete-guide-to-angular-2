import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  
  constructor(private elRef:ElementRef, private renderer:Renderer2) { }
    @HostListener('click') toggle() {
      this.isOpen = !this.isOpen;
    }
    
    // My attempt - not very elegant
    // @HostListener('click') click(eventData:Event) {
    //   //console.log(this.elRef);
    //   //console.log(this.elRef.nativeElement.parentNode);
    //   let opened:boolean = this.elRef.nativeElement.classList.contains('open');
    //   if (opened) {
    //     console.log('is opened');
    //     this.renderer.removeClass(this.elRef.nativeElement, 'open')
    //   } else {
    //     console.log('is closed');
    //     this.renderer.addClass(this.elRef.nativeElement, 'open')
    //   }
    // }
}
