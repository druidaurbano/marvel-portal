import { Component } from '@angular/core';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  eventsList: Array<Event> = [];

  constructor() {
    this.eventsList = [
      {
        id: 1,
        title: 'Evento teste',
        thumbnail: '../../../assets/evento.jpg',
        start: new Date(),
        end: new Date()
      },
      {
        id: 1,
        title: 'Evento teste',
        thumbnail: '../../../assets/evento.jpg',
        start: new Date(),
        end: new Date()
      },
      {
        id: 1,
        title: 'Evento teste',
        thumbnail: '../../../assets/evento.jpg',
        start: new Date(),
        end: new Date()
      },
      {
        id: 1,
        title: 'Evento teste',
        thumbnail: '../../../assets/evento.jpg',
        start: new Date(),
        end: new Date()
      },
      {
        id: 1,
        title: 'Evento teste',
        thumbnail: '../../../assets/evento.jpg',
        start: new Date(),
        end: new Date()
      },
    ]
  }

}
