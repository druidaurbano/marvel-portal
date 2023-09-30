import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics.component';
import { DetailsModule } from '../details/details.module';



@NgModule({
  declarations: [ComicsComponent],
  imports: [
    CommonModule,
    DetailsModule
  ],
  exports: [ComicsComponent]
})
export class ComicsModule { }
