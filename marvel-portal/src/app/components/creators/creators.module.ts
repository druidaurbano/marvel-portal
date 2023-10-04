import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorsComponent } from './creators.component';
import { DetailsModule } from '../details/details.module';
import { LoadingModule } from '../loading/loading.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [CreatorsComponent],
  imports: [
    CommonModule,
    DetailsModule,
    LoadingModule,
    InfiniteScrollModule
  ],
  exports: [CreatorsComponent]
})
export class CreatorsModule { }
