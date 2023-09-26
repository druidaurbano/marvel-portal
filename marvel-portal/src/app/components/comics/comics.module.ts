import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics.component';



@NgModule({
  declarations: [ComicsComponent],
  imports: [
    CommonModule
  ],
  exports: [ComicsComponent]
})
export class ComicsModule { }
