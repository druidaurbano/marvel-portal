import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorsComponent } from './creators.component';
import { DetailsModule } from '../details/details.module';



@NgModule({
  declarations: [CreatorsComponent],
  imports: [
    CommonModule,
    DetailsModule
  ],
  exports: [CreatorsComponent]
})
export class CreatorsModule { }
