import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WritingsComponent} from "@components/writings/writings.component";

const routes: Routes = [
  {

  },
  {
    path: 'docs/writings',
    component: WritingsComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
