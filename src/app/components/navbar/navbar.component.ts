import {Component, OnDestroy, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {Theme} from "../../models/enums/Theme";
import {Subscription, startWith} from "rxjs";

export interface MenuItem {
  value: string;
  active: boolean;
  link: string;
}

const MenuItems: MenuItem[] = [
  {value: "About", active: true, link: "about"},
  {value: "Projects", active: false, link: "projects"},
  {value: "Contact", active: false, link: "contact"},
]

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  menuItems: MenuItem[] = MenuItems;
  theme: Theme = Theme.LIGHT;

  indicatorPosition = '0';
  themeSubscription: Subscription;
  logo = "assets/images/logo.png";

  constructor(private themeService: ThemeService) {
    this.themeSubscription = this.themeService.getObservable().pipe(
      startWith(themeService.theme)
    ).subscribe(
      theme => {
        console.log(document.documentElement.classList);
        
        document.documentElement.classList.replace(this.theme, theme)
        this.theme = theme
        this.switchLogo(theme)
      }
    );
  }
  
  scrollToElement(anchorId: string) {
    document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
  }

  switchLogo(theme: Theme) {
    if (theme == Theme.DARK) {
      this.logo = "assets/images/logo-dark.png";
    } else {
      this.logo = "assets/images/logo.png";
    }
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
