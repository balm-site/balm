import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './shared/page-header/page-header.component';

@Component({
  standalone: true,
  imports: [RouterModule, PageHeaderComponent],
  selector: 'balm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly year = new Date().getFullYear();
}
