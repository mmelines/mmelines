import { Component } from '@angular/core';
import { resume } from '../resume';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  resume = resume;
}
