import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import {ProjectsModule} from './projects/projects.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
