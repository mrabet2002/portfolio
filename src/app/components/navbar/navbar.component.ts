import {Component, OnDestroy, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {Theme} from "../../models/enums/Theme";
import {Subscription} from "rxjs";

export interface MenuItem {
  value: string;
  active: boolean;
}

const MenuItems: MenuItem[] = [
  {value: "About", active: true},
  {value: "Projects", active: false},
  {value: "Contact", active: false},
]

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  menuItems: MenuItem[] = MenuItems;
  theme!: Theme;

  indicatorPosition = '0';
  themeSubscription: Subscription;

  constructor(private themeService: ThemeService) {
    this.themeSubscription = this.themeService.getObservable().subscribe(
      theme => {
        document.documentElement.classList.replace(this.theme, theme)
        this.theme = theme
      }
    );
  }

  ngOnInit() {
    this.theme = this.themeService.theme;
    document.documentElement.classList.replace(this.theme, this.themeService.theme)
  }

  selectMenuItem(menuItem: MenuItem) {
    menuItem.active = true;
    this.closeOthers(menuItem)
    // const menuItemWidth = 100 / this.menuItems.length;
    // this.indicatorPosition = `${this.menuItems.indexOf(menuItem) * menuItemWidth}%`;
  }

  closeOthers(menuItem: MenuItem) {
    this.menuItems.forEach(item => {
      if (item != menuItem) item.active = false
    })
  }

  getThemeIconPosition(icon: "sun" | "moon"): string {
    const showPosition = '-10px';
    const hidePosition = '2rem';
    if (icon == "moon")
      return this.theme == Theme.DARK ? showPosition : hidePosition;
    else
      return this.theme == Theme.LIGHT ? showPosition : hidePosition;
  }

  switchTheme() {
    this.themeService.switchTheme()
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe()
  }
}
