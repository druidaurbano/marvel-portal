//import { DatePipe, formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { Comic } from 'src/app/models/comic.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent {
  comicsList: Array<Comic> = [];

  constructor(
    private apiMarvel: ApiMarvelService,
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

  getComics() {
    this.apiMarvel.getComics().subscribe((data: any) => {
      //debugger;
      console.log('show me the data inside comics component', data.data?.results);
      console.log('show me the data results', data.results);
      for(let item of data.data?.results) {
        let comic: Comic = {
          id: item.id,
          title: item.title,
          thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          date: item.title.match(/\(\d{4}\)/)
        };

        console.log('show me the comic', comic);
        this.comicsList.push(comic);
      }
      console.log('show me data from Comics', data);
      //console.log('show me the posts', this.posts);
    });
  }

  openComic(comic: any) {
    console.log('comic clicada', comic);
  }
}
