import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { NgOptimizedImage } from "@angular/common";
import { HeroSectionComponent } from '@components/hero-section/hero-section.component';
import { ContactComponent } from '@components/contact/contact.component';
import { InputComponent } from '@components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterLink, RouterModule} from '@angular/router';
import { TextareaComponent } from '@components/textarea/textarea.component';
import { ToasterComponent } from '@components/toaster/toaster.component';
import { SocialMediaComponent } from '@components/contact/social-media/social-media.component';
import { SkillsComponent } from '@components/skills/skills.component';
import { AboutComponent } from '@components/about/about.component';
import { PortfolioComponent } from '@components/portfolio/portfolio.component';
import { FlatSectionComponent } from '@components/flat-section/flat-section.component';
import { PortfolioItemComponent } from '@components/portfolio/portfolio-item/portfolio-item.component';
import { ChipComponent } from '@components/chip/chip.component';
import {TruncatePipe} from "./pipes/truncate.pipe";
import { ExperienceComponent } from '@components/experience/experience.component';
import { DocsComponent } from './components/docs/docs.component';
import { CardSectionComponent } from './components/card-section/card-section.component';
import { DocItemComponent } from './components/docs/doc-item/doc-item.component';
import {AppRoutingModule} from "./app-routing.module";
import { WritingsComponent } from './components/writings/writings.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    ContactComponent,
    InputComponent,
    TextareaComponent,
    ToasterComponent,
    SocialMediaComponent,
    SkillsComponent,
    AboutComponent,
    PortfolioComponent,
    FlatSectionComponent,
    PortfolioItemComponent,
    ChipComponent,
    TruncatePipe,
    ExperienceComponent,
    DocsComponent,
    CardSectionComponent,
    DocItemComponent,
    WritingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'docs/writings', component: WritingsComponent }
    ])
  ],
  providers: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
