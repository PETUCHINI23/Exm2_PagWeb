import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const elRefMock = {} as ElementRef;
    const rendererMock = {
      setStyle: () => {}
    } as unknown as Renderer2;

    const directive = new HighlightDirective(elRefMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
