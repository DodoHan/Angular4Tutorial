import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule }   from '@angular/forms'; 

//Shore: we don't import BrowserModule into shared, because that will cause error for lazy loaded feature 
@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [],
  exports:[CommonModule, FormsModule]
})
export class SharedModule { }
