import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter')
  onMouseEnter(){
    const child = this.el.nativeElement.querySelector("#content");
    if(child){
      child.classList.add("mouseenter")
      child.classList.remove("mouseleave")
    }
  }



  @HostListener('mouseleave')
  onMouseLeave(){
    const child = this.el.nativeElement.querySelector("#content");
    if(child){
      child.classList.add("mouseleave")
      child.classList.remove("mouseenter")
    }
  }

}
