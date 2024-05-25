import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-flat-section',
  templateUrl: './flat-section.component.html',
  styleUrls: ['./flat-section.component.css']
})
export class FlatSectionComponent {
  @Input()
  title!: string;
  @Input()
  id: any;

}
