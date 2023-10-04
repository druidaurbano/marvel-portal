import { Component, Input, SimpleChanges } from '@angular/core';
import { Detail } from 'src/app/models/detail.model';
import { Event } from 'src/app/models/event.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  @Input() eventSearching: any;
  eventsList: Array<Event> = [];
  eventStep: 'list' | 'details' = 'list';
  event: any;
  eventDetails: Detail = { type: 'event'};
  loading: boolean = false;

  constructor(
    private apiMarvel: ApiMarvelService,
    private eventsService: EventsService
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

  ngOnChanges(changes: SimpleChanges) {
    console.log('show me the changes', changes)
    if(changes['eventSearching'].currentValue)
      this.searchEvent(changes['eventSearching'].currentValue)
  }

  getEvents(scroll?: boolean) {
    this.loading = true;
    if(this.eventsService.eventsArray.length > 0 && !scroll) {
      this.eventsList = this.eventsService.eventsArray;
      this.loading = false;
      return;
    }
    this.apiMarvel.getEvents(this.getEvents.length).subscribe((data: any) => {
      this.loading = false;
      console.log('show me the data inside events', data.data?.results);
      for(let item of data.data?.results) {
        let event: Event = {
          id: item.id,
          title: item.title,
          start: item.start,
          end: item.end,
          thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
        }
        this.eventsService.addToEventsList(event);
        console.log('show me the event', event);
        //this.eventsList.push(event);
      }
      this.eventsList = this.eventsService.eventsArray;
    });
  }

  getEvent(id: number) {
    this.apiMarvel.getEventById(id).subscribe((data: any) => {
      console.log('show me the data from event', data.data.results[0]);
      let event = data.data.results[0];
      let charactersArray  = [];
      for (let item of event.characters.items)
        charactersArray.push(item.name);
      this.eventDetails = {
        type: 'event',
        thumbnail: `${event.thumbnail.path}.${event.thumbnail.extension}`,
        title: event.title,
        start: event.start,
        end: event.end,
        characters: charactersArray
      }
    });
  }

  openEvent(event: any) {
    console.log('event clicado', event);
    this.eventStep = 'details';
    this.eventDetails = {
      type: 'event',
      thumbnail: event.thumbnail,
      title: event.title
    }
    this.getEvent(event.id);
  }

  searchEvent(event: string) {
    console.log('procurando por ... ', event);
    this.eventsList = [];
    this.eventsService.resetEventsList();
    this.loading = true;
    this.apiMarvel.searchEvents(event).subscribe((data: any) => {
      console.log('show me the results', data.data.results[0]);
      this.loading = false;
      for(let item of data.data?.results) {
        let e: Event = {
          id: item.id,
          title: item.title,
          start: item.start,
          end: item.end,
          thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
        };
        this.eventsService.addToEventsList(e);
        console.log('show me the character', e);
        //this.charactersList.push(character);
      }
      this.eventsList = this.eventsService.eventsArray;
    })
  }

  goBack() {
    this.eventStep = 'list';
    this.event = {};
  }

  onScroll(): void {
    if(this.eventStep === 'list')
      this.getEvents(true)
  }

}
