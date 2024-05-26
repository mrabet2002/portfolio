import {Injectable} from '@angular/core';
import {Theme} from "../models/enums/Theme";
import {ParentService} from "./parent.service";
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService extends ParentService<Theme> {

  theme: Theme = Theme.DARK;

  theme$ = new BehaviorSubject<Theme>(Theme.DARK);

  constructor() {
    super()
    this.observable = new Subject<Theme>();
    this.initTheme();
  }

  switchTheme() {
    this.theme = this.theme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem("theme", this.theme);
    this.notify(this.theme)
    this.theme$.next(this.theme)
  }

  getCurrentTheme(): Theme | undefined {
    return localStorage.getItem("theme") as Theme;
  }

  observeTheme() {
    return this.theme$.asObservable();
  }

  initTheme() {
    let storedTheme = this.getCurrentTheme();
    if (storedTheme) {
      this.theme = storedTheme

      this.notify(this.theme)
      this.theme$.next(this.theme)
    }
    else {
      this.setTheme(Theme.DARK)
    }
  }

  setTheme(theme: Theme) {
    this.theme = theme;
    localStorage.setItem("theme", this.theme);
    this.notify(this.theme)
    this.theme$.next(this.theme)
  }
}
