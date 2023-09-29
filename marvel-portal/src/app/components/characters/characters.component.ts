import { Component } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  charactersList: Array<Character> = [];

  constructor(
    private apiMarvel: ApiMarvelService
  ) {
    /* this.charactersList = [
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
    ] */
  }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.apiMarvel.getCharacters().subscribe((data: any) => {
      console.log('show me the data inside comics component', data.data?.results);
      for(let item of data.data?.results) {
        let character: Character = {
          id: item.id,
          name: item.name,
          thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
        };

        console.log('show me the character', character);
        this.charactersList.push(character);
      }
      //console.log('show me the posts', this.posts);
    });
  }
}
