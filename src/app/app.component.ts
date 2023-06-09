import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'balm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'balm';
}
