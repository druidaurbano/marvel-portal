import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorsComponent } from './creators.component';



@NgModule({
  declarations: [CreatorsComponent],
  imports: [
    CommonModule
  ],
  exports: [CreatorsComponent]
})
export class CreatorsModule { }
