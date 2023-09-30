import { Component } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  eventsList: Array<Event> = [];
  eventStep: 'list' | 'details' = 'list';
  event: any;

  constructor(
    private apiMarvel: ApiMarvelService
  ) {
    /* this.eventsList = [
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
    ] */
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.apiMarvel.getEvents().subscribe((data: any) => {
      console.log('show me the data inside events', data.data?.results);
      for(let item of data.data?.results) {
        let event: Event = {
          id: item.id,
          title: item.title,
          start: item.start,
          end: item.end,
          thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
        }
        console.log('show me the event', event);
        this.eventsList.push(event);
      }
    });
  }

  getEvent(id: number) {
    this.apiMarvel.getEventById(id).subscribe((data: any) => {
      console.log('show me the data from event', data);
      let event = data.data.results[0];
      this.event = {
        thumbnail: `${event.thumbnail.path}.${event.thumbnail.extension}`,
        title: event.title
      }
    });
  }

  openEvent(event: any) {
    console.log('event clicado', event);
    this.eventStep = 'details';
    this.getEvent(event.id);
  }

  goBack() {
    this.eventStep = 'list';
    this.event = {};
  }

}
