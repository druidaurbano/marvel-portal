import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { DetailsModule } from '../details/details.module';
import { LoadingModule } from '../loading/loading.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    DetailsModule,
    LoadingModule,
    InfiniteScrollModule
  ],
  exports: [EventsComponent]
})
export class EventsModule { }
