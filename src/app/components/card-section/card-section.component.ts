import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent {
  @Input()
  title!: string;
  @Input()
  id: any;

}
