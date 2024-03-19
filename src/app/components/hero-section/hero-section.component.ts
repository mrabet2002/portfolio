import { animate, state, style, transition, trigger } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription, startWith } from 'rxjs';
import { Theme } from 'src/app/models/enums/Theme';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  theme!: Theme;
  profilePic = "assets/images/@4xprofile.webp";

  subscription: Subscription;

  constructor(
    private themeService: ThemeService,
    private scroller: ViewportScroller
  ) {
    this.subscription = this.themeService.getObservable().pipe(
      startWith(themeService.theme) // Get and emit initial theme
    ).subscribe(
      theme => {
        this.switchProfilePic(theme)
        this.theme = theme;
      }
    );
  }

  scrollToElement(anchorId: string) {
    document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngONInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  switchProfilePic(theme: Theme) {
    if (theme == Theme.DARK) {
      this.profilePic = "assets/images/@4xprofile_dark.webp";
    } else {
      this.profilePic = "assets/images/@4xprofile.webp";
    }
  }

}
