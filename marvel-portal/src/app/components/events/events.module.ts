import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { DetailsModule } from '../details/details.module';
import { LoadingModule } from '../loading/loading.module';



@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    DetailsModule,
    LoadingModule
  ],
  exports: [EventsComponent]
})
export class EventsModule { }
