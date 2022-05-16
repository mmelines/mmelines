import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: ResumeComponent }]),
  ],
  declarations: [
    AppComponent,
    ResumeComponent,
    TopBarComponent,
    NavBarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
