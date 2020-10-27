import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }
  @Input('appTimes') set renderTimes(time: number){
      this.viewContainer.clear();
      for(let i = 0; i < time; i++){
        this.viewContainer.createEmbeddedView(this.templateRef,{});
      }
  }
}
