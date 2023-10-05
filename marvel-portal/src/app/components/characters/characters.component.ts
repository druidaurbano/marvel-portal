import { Component, Input, SimpleChanges } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { Detail } from 'src/app/models/detail.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  @Input() characterSearching: any;
  charactersList: Array<Character> = [];
  characterStep: 'list' | 'details' = 'list';
  character: any = '';
  characterDetails: Detail = { type: 'character' };
  loading: boolean = false;

  constructor(
    private apiMarvel: ApiMarvelService,
    private charactersService: CharactersService
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

  ngOnChanges(changes: SimpleChanges) {
    if(changes['characterSearching'].currentValue)
      this.searchCharacter(changes['characterSearching'].currentValue)
  }

  getCharacters(scroll?: boolean) {
    this.loading = true;
    if(this.charactersService.charactersArray.length > 0 && !scroll) {
      this.charactersList = this.charactersService.charactersArray;
      this.loading = false;
      return;
    }
    this.apiMarvel.getCharacters(this.charactersList.length).subscribe((data: any) => {
      this.loading = false;
      for(let item of data.data?.results) {
        let character: Character = {
          id: item.id,
          name: item.name,
          thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
        };
        this.charactersService.addToCharactersList(character);
      }
      this.charactersList = this.charactersService.charactersArray;
    });
  }

  getCharacter(id: number) {
    this.apiMarvel.getCharacterById(id).subscribe((data: any) => {
      let character = data.data.results[0];
      let comicsArray  = [];
      for (let item of character.comics.items)
        comicsArray.push(item.name);
      this.characterDetails = {
        type: 'character',
        thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        title: character.name,
        comics: comicsArray
      }
    });
  }

  openCharacter(character: any) {
    this.characterStep = 'details';
    this.characterDetails = {
      type: 'character',
      thumbnail: character.thumbnail,
      title: character.name
    };
    this.getCharacter(character.id);
  }

  searchCharacter(c: string) {
    this.charactersList = [];
    this.charactersService.resetCharactersList();
    this.loading = true;
    this.apiMarvel.searchCharacters(c).subscribe((data: any) => {
      this.loading = false;
      for(let item of data.data?.results) {
        let character: Character = {
          id: item.id,
          name: item.name,
          thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
        };
        this.charactersService.addToCharactersList(character);
      }
      this.charactersList = this.charactersService.charactersArray;
    })
  }

  goBack() {
    this.characterStep = 'list';
    this.character = {};
  }

  onScroll(): void {
    if(this.characterStep === 'list')
      this.getCharacters(true)
  }
}
