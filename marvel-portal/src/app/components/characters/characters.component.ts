import { Component } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  charactersList: Array<Character> = [];
  characterStep: 'list' | 'details' = 'list';
  character: any;
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

  getCharacters() {
    this.loading = true;
    if(this.charactersService.charactersArray.length > 0) {
      this.charactersList = this.charactersService.charactersArray;
      this.loading = false;
      return;
    }
    this.apiMarvel.getCharacters().subscribe((data: any) => {
      this.loading = false;
      console.log('show me the data inside comics component', data.data?.results);
      for(let item of data.data?.results) {
        let character: Character = {
          id: item.id,
          name: item.name,
          thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
        };
        this.charactersService.addToCharactersList(character);
        console.log('show me the character', character);
        //this.charactersList.push(character);
      }
      this.charactersList = this.charactersService.charactersArray;
      //console.log('show me the posts', this.posts);
    });
  }

  getCharacter(id: number) {
    console.log('getting character id:', id);
    //let comic = this.apiMarvel.getComicsById(id);
    this.apiMarvel.getCharacterById(id).subscribe((data: any) => {
      console.log('show me the data from character', data);
      let character = data.data.results[0];
      this.character = {
        thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        title: character.title
      }
    });
    //console.log('show me the comic', comic);
  }

  openCharacter(character: any) {
    console.log('character clicada', character);
    /* this.openDetailsComic.emit({
      type: 'comic',
      element: comic
    }); */
    this.characterStep = 'details';
    this.getCharacter(character.id);
    //this.router.navigate(['/details']);
  }

  goBack() {
    this.characterStep = 'list';
    this.character = {};
  }
}
