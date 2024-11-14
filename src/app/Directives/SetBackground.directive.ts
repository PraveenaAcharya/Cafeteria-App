import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})
export class SetBackground implements OnInit{
    private element : ElementRef;
    constructor(element : ElementRef, private rederer : Renderer2){
        this.element = element;
    }
    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor= '#36454F'
        this.element.nativeElement.style.color="white"
        this.element.nativeElement.style.borderRadius="5px"

//not directly manupulating the dom directly 
        this.rederer.setStyle(this.element.nativeElement,'backgroundColor','#36454F')

    }
    
}