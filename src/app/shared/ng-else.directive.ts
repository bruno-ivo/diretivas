import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgElse]'
})
export class NgElseDirective {

  @Input() set ngElse (condition: boolean){
    if (!condition){
      this.viewRef.createEmbeddedView(this.tempRef);
    } else {
      this.viewRef.clear();
    }
  }



  constructor(
    private tempRef: TemplateRef<any>,
    private viewRef: ViewContainerRef
  ) { }



}
