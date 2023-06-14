import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
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
  private readonly _router = inject(Router);
  expanded = false;
  condensed = false;

  ngOnInit(): void {
    this._pageHeader.collapse$.subscribe(() => (this.expanded = false));
    this._router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => (this.expanded = false));
  }
}
