import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisListComponent }      from './crisis-list/crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail/crisis-detail.component';
import { CrisisCenterComponent } from  './crisis-center.component';
import { CrisisInfoComponent } from  './crisis-info/crisis-info.component';
import { CrisisContactComponent } from  './crisis-contact/crisis-contact.component';
import { CrisisCenterRoutingModule } from  './crisis-center-routing.module';



@NgModule({
  imports: [
    CommonModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
  CrisisInfoComponent,
CrisisListComponent,
CrisisDetailComponent,
CrisisContactComponent]
})
export class CrisisCenterModule { }
