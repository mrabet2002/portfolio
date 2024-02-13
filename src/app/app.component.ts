import {AfterViewInit, Component, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {Theme} from "./models/enums/Theme";
import {ThemeService} from "./services/theme.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit{
  title = 'portfolio';
  theme: Theme = Theme.LIGHT;
  themeSubscription: Subscription;
  constructor(private themeService: ThemeService,
              private renderer: Renderer2) {
    this.themeSubscription = themeService.getObservable().subscribe(
      theme => {
        // setTimeout(theme)
      }
    )
  }

  ngOnInit() {
    // this.setTheme(this.themeService.theme)
  }

  setTheme(theme: Theme) {
    document.documentElement.classList.replace(this.theme, theme)
    this.theme = theme
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe()
  }
}
