import {Component, OnDestroy, OnInit} from '@angular/core';
import {Theme} from "./models/enums/Theme";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit{
  title = 'portfolio';
  constructor() {
  
  }

  ngOnInit() {
    // this.setTheme(this.themeService.theme)
  }

  setTheme(theme: Theme) {
  }

  ngOnDestroy() {
  }
}
