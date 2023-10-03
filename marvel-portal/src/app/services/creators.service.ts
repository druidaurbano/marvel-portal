import { Injectable } from '@angular/core';
import { Creator } from '../models/creator.model';

@Injectable({
  providedIn: 'root'
})
export class CreatorsService {
  creatorsArray: Array<Creator> = [];

  constructor() { }

  addToCreatorsList(creator: Creator) {
    console.log('adicionando creator:', creator, 'para a lista de creators', this.creatorsArray);
    this.creatorsArray.push(creator);
  }

  resetCreatorsList() {
    this.creatorsArray = [];
  }
}
