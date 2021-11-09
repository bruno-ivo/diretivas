import { Directive, HostListener, HostBinding , ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirectiveDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this.render.setStyle(this.eRef.nativeElement, 'background-color', 'yellow');
    //this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this.render.setStyle(this.eRef.nativeElement, 'background-color', 'white');
    //this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }



  constructor(
    private backgroundColor: HostBinding
    //private eRef: ElementRef,
    //private render: Renderer2
  ) { }

}
