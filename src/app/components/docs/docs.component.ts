import {Component, OnInit} from '@angular/core';
import {ThemeService} from "@services/theme.service";

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit{
  theme$ = this.themeService.observeTheme();
  docItems = [
    {
      title: "Resume",
      icon: "cv",
      link: "assets/docs/resume.pdf"
    },
    {
      title: "Cover Letter",
      icon: "cover-letter",
      link: "assets/docs/cover-letter.pdf"
    },
    {
      title: "My Writings",
      icon: "writing",
      routerLink: "/docs/writings"
    },
  ]

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
  }
}
