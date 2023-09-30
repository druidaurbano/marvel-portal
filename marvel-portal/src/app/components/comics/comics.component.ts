//import { DatePipe, formatDate } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Comic } from 'src/app/models/comic.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent {
  @Output() openDetailsComic = new EventEmitter<any>();
  comicsList: Array<Comic> = [];
  comicStep: 'list' | 'details' = 'list';
  comic: any;

  constructor(
    private apiMarvel: ApiMarvelService,
    private router: Router
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
    /* this.openDetailsComic.emit({
      type: 'comic',
      element: comic
    }); */
    this.comicStep = 'details';
    this.getComic(comic.id);
    //this.router.navigate(['/details']);
  }

  getComic(id: number) {
    console.log('getting comic id:', id);
    //let comic = this.apiMarvel.getComicsById(id);
    this.apiMarvel.getComicById(id).subscribe((data: any) => {
      console.log('show me the data from comic', data);
      let comic = data.data.results[0];
      this.comic = {
        thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        title: comic.title
      }
    });
    //console.log('show me the comic', comic);
  }

  goBack() {
    this.comicStep = 'list';
    this.comic = {};
  }
}
