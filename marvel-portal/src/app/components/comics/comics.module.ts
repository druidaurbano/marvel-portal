import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics.component';
import { DetailsModule } from '../details/details.module';
import { LoadingModule } from '../loading/loading.module';



@NgModule({
  declarations: [ComicsComponent],
  imports: [
    CommonModule,
    DetailsModule,
    LoadingModule
  ],
  exports: [ComicsComponent]
})
export class ComicsModule { }
