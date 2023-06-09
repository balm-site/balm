import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollToElementDirective } from '../scroll-to-element/scroll-to-element.directive';
import { PageHeaderService } from './page-header.service';

@Component({
  selector: 'balm-page-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollToElementDirective],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  private readonly _pageHeader = inject(PageHeaderService);
  expanded = false;
  condensed = false;

  ngOnInit(): void {
    this._pageHeader.collapse$.subscribe(() => (this.expanded = false));
  }
}
