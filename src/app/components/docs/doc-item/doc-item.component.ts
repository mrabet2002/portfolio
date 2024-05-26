import {Component, Input} from '@angular/core';
import {Theme} from "@models/enums/Theme";
import {Router} from "@angular/router";

@Component({
  selector: 'app-doc-item',
  templateUrl: './doc-item.component.html',
  styleUrls: ['./doc-item.component.css']
})
export class DocItemComponent {
  @Input()
  doc: any;
  @Input() theme!: Theme;

  constructor(private router: Router) {
  }

  openDoc() {
    if (this.doc.link)
      window.open(this.doc.link, "_blank")
    else if (this.doc.routerLink)
      this.router.navigate([this.doc.routerLink]);
  }
}
