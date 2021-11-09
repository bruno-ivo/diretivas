import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private renderer: Renderer2,private elementRef:ElementRef) {
    //this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }
}
