import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { DetailsModule } from '../details/details.module';



@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    DetailsModule
  ],
  exports: [EventsComponent]
})
export class EventsModule { }
