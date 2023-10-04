import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics.component';
import { DetailsModule } from '../details/details.module';
import { LoadingModule } from '../loading/loading.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [ComicsComponent],
  imports: [
    CommonModule,
    DetailsModule,
    LoadingModule,
    InfiniteScrollModule
  ],
  exports: [ComicsComponent]
})
export class ComicsModule { }
