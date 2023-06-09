import { Directive, HostListener, Input, inject } from '@angular/core';
import { PageHeaderService } from '../page-header/page-header.service';

@Directive({
  selector: '[balmScrollToElement]',
  standalone: true,
})
export class ScrollToElementDirective {
  private readonly _pageHeader = inject(PageHeaderService);

  @Input({ required: true, alias: 'balmScrollToElement' }) selector!: string;

  @HostListener('click', ['$event'])
  onClick(): void {
    setTimeout(() => {
      const target = document.querySelector(this.selector) as HTMLElement;
      target.scrollIntoView();
      this._pageHeader.collapse$.next();
    });
  }
}
