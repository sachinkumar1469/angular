import { Directive,ElementRef,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding("class.open") toggle:boolean = false;

  // @HostListener("click") onClick(){
  //   this.toggle = !this.toggle;
  // }

  @HostListener("document:click",['$event']) onDocumentClick(e:Event){
    this.toggle = this.elRef.nativeElement.contains(e.target) ? !this.toggle : false;
  }

  constructor(private elRef:ElementRef) { }

}
