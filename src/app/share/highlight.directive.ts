import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,

  ) {

  }

  @HostBinding('class')
  attrClass!: string;

  @HostListener('click')
  clicked(): void {
    console.log('click event on host element');
  }

  @HostListener('mouseenter', ['$event'])
  enter(event: Event): void {
    console.log('mouseenter event on host element');
    this.attrClass = 'bububu';
    this.highlightBg('darkslategrey')
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event): void {
    // console.log('mouseleave event on host element');
    this.attrClass = '';
    this.highlightBg('')
  }

  private highlightBg(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color)
  }
}