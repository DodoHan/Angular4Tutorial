import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import HeroService from './service/hero.service';

import {AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountDownDisplayComponent } from './count-down-display/count-down-display.component';
import { RocketLauncherConsoleComponent } from './rocket-launcher-console/rocket-launcher-console.component';

//Shore: Module is the brick of angular4 app.
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    CountDownDisplayComponent,
    RocketLauncherConsoleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    //Shore： 注意：不是AppRoutingModule.RouterModule 为什么？
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
