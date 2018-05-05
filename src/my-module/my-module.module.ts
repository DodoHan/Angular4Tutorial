import { SharedModule }   from '../app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
/*
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
*/
import {
  MatTableModule
} from '@angular/material';

import { HelloWorldComponent } from './hello-world.component';
import { UnlessDirective } from './structural-directive/unless-directive/unless.directive';
import { TableBasicExampleComponent } from './table-basic-example/table-basic-example.component';



//Shore: Module is the brick of angular4 app.
@NgModule({
  declarations: [
    HelloWorldComponent,
    UnlessDirective,
    TableBasicExampleComponent
  ],
  imports: [
    SharedModule,
    MatTableModule,
    RouterModule
  ],
  //Shore: exports is not only module but also component/directive/pipe
  exports:[
    HelloWorldComponent,
    UnlessDirective,
    TableBasicExampleComponent
   ]
})
export class MyModule { }
