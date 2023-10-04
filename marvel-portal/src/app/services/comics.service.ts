import { Injectable } from '@angular/core';
import { Comic } from '../models/comic.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  comicsArray: Array<Comic> = [];

  constructor() { }

  addToComicsList(comic: Comic) {
    console.log('adicionando comic:', comic, 'para a lista de comics', this.comicsArray);
    this.comicsArray.push(comic);
  }

  formatComicDetail(comic: any) {

  }

  resetComicsList() {
    this.comicsArray = [];
  }
}
