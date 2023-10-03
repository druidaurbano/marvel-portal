import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  charactersArray: Array<Character> = [];

  constructor() { }

  addToCharactersList(character: Character) {
    //console.log('adicionando event:', character, 'para a lista de comics', this.charactersArray);
    this.charactersArray.push(character);
  }

  resetCharactersList() {
    this.charactersArray = [];
  }
}
