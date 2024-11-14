
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Apphover]'
})
export class ApphoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  @HostBinding('style.backgroundColor') backgroundColor : string ='yellow';
  @HostBinding('style.Color') Color : string ='black';
  @HostBinding('style.border') border : string ='#28282B 2px solid';

  @HostListener('mouseenter') onMouseEnter(){
    this.backgroundColor='white'
    this.Color = '#28282B'
  }
  @HostListener('mouseout') onMouseOut(){
    this.backgroundColor='yellow'
    this.Color = 'black'
  }

}
