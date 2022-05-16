import { Component } from '@angular/core';
import { resume } from '../resume';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  resume = resume;
}
