import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from "../../services/theme.service";
import { Theme } from "../../models/enums/Theme";
import { Subscription, startWith } from "rxjs";

export interface MenuItem {
  value: string;
  active: boolean;
  link: string;
}

const MenuItems: MenuItem[] = [
  { value: "About", active: true, link: "about" },
  { value: "Skills", active: false, link: "skills" },
  { value: "Portfolio", active: false, link: "portfolio" },
  { value: "Experience", active: false, link: "experience" },
  { value: "Contact", active: false, link: "contact" },
]

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  /**
   * Closing menu when clicking outside of it
   */

  @ViewChild("menu") menu!: ElementRef;
  @ViewChild("menuBtn") menuBtn!: ElementRef;


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    // Check if the click was outside the menu
    const clickedInside = this.menu.nativeElement.contains(event.target) || this.menuBtn.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.menuOpen = false;
    }
  }

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
    const showPosition = '-12px';
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
