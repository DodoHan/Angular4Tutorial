import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule }   from './shared/shared.module'; // <-- NgModel lives here

import { AppComponent } from './app.component';
//import { HeroesComponent } from './heroes/heroes.component';
//import { HeroDetailComponent } from './hero-detail/hero-detail.component';
//import HeroService from './service/hero.service';

import {AppRoutingModule} from './app-routing.module';
//import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesModule } from './heroes/heroes.module';
//import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';


//Shore: Module is the brick of angular4 app.
@NgModule({
  declarations: [
    AppComponent,
    //HeroesComponent,
    //HeroDetailComponent,
    //DashboardComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule, // <-- import the FormsModule before binding with [(ngModel)]
    //Shore： 注意：不是AppRoutingModule.RouterModule 为什么？
    HeroesModule,
    AppRoutingModule,
    CrisisCenterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
