import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element :ElementRef, private renderer :Renderer2) { }

  @HostListener('mouseenter') OnmouseEnter(){
    this.renderer.addClass(this.element.nativeElement,'product-cardcss')
  }
  @HostListener('mouseout') OnmouseOut(){
    this.renderer.removeClass(this.element.nativeElement,'product-cardcss')
  }


}
