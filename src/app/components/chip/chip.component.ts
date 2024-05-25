import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent {
  @Input()
  label!: string;

  @Input()
  color: string = 'primary';

  @Input()
  type: "filled" | "outlined" | "ghost" = "filled";

  classes: any = {
    filled: 'bg-primary text-white',
  }

}
