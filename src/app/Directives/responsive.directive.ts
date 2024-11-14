// directive - componennt directive, attribute directive and structural directive
// atrribute directive - change appearance of website do not remove or add element to dom -ngClass , ngStyle --- doesn'y have template
//change structure of dom by adding or removing element on webpage --does not have template - ngIf , ngFor, ngSwitch
//we use selector of directive like an html attribute generally
import { Directive, ElementRef } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout'

@Directive({
  selector: '[appResponsive]'
  //when we wrap selector value within [] bracket itt can only be use as a html attribute
})
export class ResponsiveDirective {

  constructor(private element:ElementRef, private breakpointObserver:BreakpointObserver) { 
    this.breakpointObserver
    .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
    .subscribe({
      next:(result:any)=>{
        for(let breakpoint of Object.keys(result.breakpoints))
          if(result.breakpoints[breakpoint]){
            if(breakpoint===Breakpoints.HandsetPortrait)
              this.element.nativeElement.classList.remove('pc');

            if(breakpoint===Breakpoints.WebLandscape)
              this.element.nativeElement.classList.add('pc')
          }
      }
    })
  }

}
