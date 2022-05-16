import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: ResumeComponent }]),
  ],
  declarations: [AppComponent, ResumeComponent, TopBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
