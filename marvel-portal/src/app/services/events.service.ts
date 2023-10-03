import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  eventsArray: Array<Event> = [];

  constructor() { }

  addToEventsList(event: Event) {
    console.log('adicionando event:', event, 'para a lista de comics', this.eventsArray);
    this.eventsArray.push(event);
  }

  resetEventsList() {
    this.eventsArray = [];
  }
}
