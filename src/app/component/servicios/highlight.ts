import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[highlightDerective]',
  host: {
    '(mouseenter)': "iluminar('#f0f0f0', 'pointer')",
    '(mouseleave)': "iluminar('','')"
  }
})
export class HighlightDirective {

  private el: ElementRef = inject(ElementRef);

  iluminar(color: string, cursor: string){
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.cursor = cursor;
  }

}
