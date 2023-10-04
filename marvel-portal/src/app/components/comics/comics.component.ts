//import { DatePipe, formatDate } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Comic } from 'src/app/models/comic.model';
import { Detail } from 'src/app/models/detail.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent {
  @Output() openDetailsComic = new EventEmitter<any>();
  @Input() comicSearching: any;
  comicsList: Array<Comic> = [];
  comicStep: 'list' | 'details' = 'list';
  comic: any;
  comicDetails: Detail = { type: 'comic'};
  loading: boolean = false;

  constructor(
    private apiMarvel: ApiMarvelService,
    private router: Router,
    private comicsService: ComicsService
    //public datePipe: DatePipe
  ) {
    /* this.comicsList = [
      {
        id: 1,
        title: 'Homem de Ferro (2023) #2',
        thumbnail: '../../../assets/teste.jpg',
        date: new Date().getFullYear()
      },
      {
        id: 1,
        title: 'Homem de Ferro (2023) #2',
        thumbnail: '../../../assets/teste.jpg',
        date: new Date().getFullYear()
      },
      {
        id: 1,
        title: 'Homem de Ferro (2023) #2',
        thumbnail: '../../../assets/teste.jpg',
        date: new Date().getFullYear()
      },
      {
        id: 1,
        title: 'Homem de Ferro (2023) #2',
        thumbnail: '../../../assets/teste.jpg',
        date: new Date().getFullYear()
      },
      {
        id: 1,
        title: 'Homem de Ferro (2023) #2',
        thumbnail: '../../../assets/teste.jpg',
        date: new Date().getFullYear()
      },
      {
        id: 1,
        title: 'Homem de Ferro (2023) #2',
        thumbnail: '../../../assets/teste.jpg',
        date: new Date().getFullYear()
      },
      {
        id: 1,
        title: 'Homem de Ferro (2023) #2',
        thumbnail: '../../../assets/teste.jpg',
        date: new Date().getFullYear()
      },
      {
        id: 1,
        title: 'Homem de Ferro (2023) #2',
        thumbnail: '../../../assets/teste.jpg',
        date: new Date().getFullYear()
      },
      {
        id: 1,
        title: 'Homem de Ferro (2023) #2',
        thumbnail: '../../../assets/teste.jpg',
        date: new Date().getFullYear()
      },
      {
        id: 1,
        title: 'Homem de Ferro (2023) #2',
        thumbnail: '../../../assets/teste.jpg',
        date: new Date().getFullYear()
      },
      {
        id: 1,
        title: 'Homem de Ferro (2023) #2',
        thumbnail: '../../../assets/teste.jpg',
        date: new Date().getFullYear()
      },
      {
        id: 1,
        title: 'Homem de Ferro (2023) #2',
        thumbnail: '../../../assets/teste.jpg',
        date: new Date().getFullYear()
      },
    ]; */
  }

  ngOnInit() {
    this.getComics();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('show me the changes', changes)
    if(changes['comicSearching'].currentValue)
      this.searchComic(changes['comicSearching'].currentValue)
  }

  getComics(scroll?: boolean) {
    this.loading = true;
    if(this.comicsService.comicsArray.length > 0 && !scroll) {
      this.comicsList = this.comicsService.comicsArray;
      this.loading = false;
      return;
    }
    this.apiMarvel.getComics(this.comicsList.length).subscribe((data: any) => {
      this.loading = false;
      for(let item of data.data?.results) {
        let comic: Comic = {
          id: item.id,
          title: item.title,
          thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          date: item.title.match(/\(\d{4}\)/)
        };
        this.comicsService.addToComicsList(comic);
      }
      this.comicsList = this.comicsService.comicsArray;
    });
  }

  openComic(comic: any) {
    this.comicStep = 'details';
    this.comicDetails = {
      type: 'comic',
      thumbnail: comic.thumbnail,
      title: comic.title
    };
    this.getComic(comic.id);
  }

  getComic(id: number) {
    console.log('getting comic id:', id);
    //let comic = this.apiMarvel.getComicsById(id);
    this.apiMarvel.getComicById(id).subscribe((data: any) => {
      console.log('show me the data from comic', data.data.results[0]);
      let comic = data.data.results[0];
      let artistsArray  = [];
      for (let item of comic.creators.items)
        artistsArray.push(item.name);
      this.comicDetails = {
        type: 'comic',
        thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        title: comic.title,
        date: comic.dates[1].date,
        artists: artistsArray,
        description:  comic.textObjects[0].text
      }
    });
  }

  searchComic(c: string) {
    console.log('procurando por ... ', c);
    this.comicsList = [];
    this.comicsService.resetComicsList();
    this.loading = true;
    this.apiMarvel.searchComics(c).subscribe((data: any) => {
      console.log('show me the results', data.data.results[0]);
      this.loading = false;
      for(let item of data.data?.results) {
        let comic: Comic = {
          id: item.id,
          title: item.title,
          thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          date: item.title.match(/\(\d{4}\)/)
        };
        this.comicsService.addToComicsList(comic);
        console.log('show me the character', comic);
        //this.charactersList.push(character);
      }
      this.comicsList = this.comicsService.comicsArray;
    })
  }

  goBack() {
    this.comicStep = 'list';
    this.comic = {};
  }

  onScroll(): void {
    if(this.comicStep === 'list')
      this.getComics(true)
  }
}
