import { Component } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  charactersList: Array<Character> = [];

  constructor() {
    this.charactersList = [
      {
        id: 1,
        name: 'Loki',
        thumbnail: '../../../assets/character.jpg'
      },
      {
        id: 1,
        name: 'Loki',
        thumbnail: '../../../assets/character.jpg'
      },
      {
        id: 1,
        name: 'Loki',
        thumbnail: '../../../assets/character.jpg'
      },
      {
        id: 1,
        name: 'Loki',
        thumbnail: '../../../assets/character.jpg'
      },
      {
        id: 1,
        name: 'Loki',
        thumbnail: '../../../assets/character.jpg'
      },
      {
        id: 1,
        name: 'Loki',
        thumbnail: '../../../assets/character.jpg'
      },
    ]
  }
}
