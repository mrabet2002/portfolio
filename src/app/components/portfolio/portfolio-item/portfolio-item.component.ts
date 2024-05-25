import {Component, Input} from '@angular/core';
import {Project} from "@models/project.model";

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent {
  @Input()
  project!: Project;
}
