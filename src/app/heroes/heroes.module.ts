//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { SharedModule }   from '../shared/shared.module';


//import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import HeroService from '../service/hero.service';

import {HeroesRoutingModule} from './heroes-routing.module';


//import {AppRoutingModule} from './app-routing.module';
//import { DashboardComponent } from './dashboard/dashboard.component';
//import { CrisisListComponent } from './crisis-list/crisis-list.component';

//Shore: Module is the brick of angular4 app.
@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    SharedModule, 
    HeroesRoutingModule
  ],
  providers: [HeroService]
})
export class HeroesModule { }
