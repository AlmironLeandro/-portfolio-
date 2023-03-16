import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './Pages/intro/intro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './Pages/about/about.component';
import { ResumeComponent } from './Pages/resume/resume.component';
import { WorksComponent } from './Pages/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NavbarComponent,
    AboutComponent,
    ResumeComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
