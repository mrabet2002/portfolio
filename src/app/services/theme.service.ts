import {Injectable} from '@angular/core';
import {Theme} from "../models/enums/Theme";
import {ParentService} from "./parent.service";
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService extends ParentService<Theme> {

  theme: Theme = Theme.LIGHT;

  constructor() {
    super()
    this.observable = new Subject<Theme>();
    this.initTheme();
  }

  switchTheme() {
    if (this.theme == Theme.LIGHT)
      this.setTheme(Theme.DARK)
    else
      this.setTheme(Theme.LIGHT)
  }

  getCurrentTheme(): Theme | undefined {
    return localStorage.getItem("theme") as Theme;
  }

  initTheme() {
    let storedTheme = this.getCurrentTheme();
    if (storedTheme) {
      this.theme = storedTheme
      this.notify(this.theme)
    }
    else {
      this.setTheme(Theme.LIGHT)
    }
  }

  setTheme(theme: Theme) {
    this.theme = theme;
    localStorage.setItem("theme", this.theme);
    this.notify(this.theme)
  }
}
