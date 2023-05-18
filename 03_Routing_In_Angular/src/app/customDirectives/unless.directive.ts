import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition:boolean){
    if(!condition){
      // Display the template if condition is false
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear();
    }
  }

  // We need access to ng-template and place where we want to put content in DOM
  constructor(private templateRef:TemplateRef<any>,private viewContainerRef:ViewContainerRef) { }

}
