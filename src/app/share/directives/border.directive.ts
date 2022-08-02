import { Attribute, Directive, ElementRef, Input, Renderer2, type OnInit } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnInit {
  @Input('color') color!: string;
  private baseColor = 'coral';
  private baseWidth = '1px';
  private baseStyle = 'solid';

  constructor(
    private el: ElementRef,
    private render: Renderer2,
    @Attribute('bWidth') private borderWidth: string,
    @Attribute('bStyle') private borderStyle: string
  ) { }

  ngOnInit(): void {
    console.log(this.el.nativeElement.getAttributeNames());
    console.log(`Value of injected attribute 'color': ${this.color}`);
    console.log(`Value of injected attribute 'width': ${this.borderWidth}`);
    console.log(`Value of injected attribute 'style': ${this.borderStyle}`);
    this.border(this.color);
  }


  private border(borderColor: string | null): void {
    const color = borderColor ? borderColor : this.baseColor;
    const style = this.borderStyle ? this.borderStyle : this.baseStyle;
    const width = this.borderWidth ? this.borderWidth : this.baseWidth;
    
    this.render.setStyle(this.el.nativeElement, 'borderColor', color);
    this.render.setStyle(this.el.nativeElement, 'borderStyle', style);
    this.render.setStyle(this.el.nativeElement, 'borderWidth', width);
  }
}
