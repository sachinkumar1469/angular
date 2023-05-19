import {HostListener,Directive,ElementRef,OnInit,Renderer2,HostBinding,Input} from "@angular/core";

@Directive({
  selector:"[highlight]"
})
export class HighlightDirective implements OnInit{
  constructor(private elementRef:ElementRef,private renderer:Renderer2){}

  @Input() defaultColor:string = 'transparent';

  @Input() highlightedColor!:string;

  @HostBinding("style.backgroundColor") bgColor:string = this.defaultColor;

  ngOnInit(): void {
  }

  @HostListener("mouseover") onMouseClick(){
    this.bgColor = this.highlightedColor;
  }
  @HostListener("mouseout") onMouseOut(){
    this.bgColor = this.defaultColor;
  }
}
