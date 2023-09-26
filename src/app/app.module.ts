import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CalendarModule } from './modules/calendar/calendar.module';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { FrontPageComponent } from './front-page/front-page.component';
import { MainMenuComponent } from './shared/menus/main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], {
      //... other features
      bindToComponentInputs: true // <-- enable this feature
    }),
    CalendarModule,
    MatCardModule,
    MatButtonModule,
    MainMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
