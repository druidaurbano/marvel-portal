import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { Component } from '@angular/core';
import { Creator } from 'src/app/models/creator.model';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent {
  creatorsList: Array<Creator> = [];

  constructor(
    private apiMarvel: ApiMarvelService
  ) {
    /* this.creatorsList = [
      {
        id: 1,
        fullName: 'Johnson Gallak',
        thumbnail: '../../../assets/creator.jpg'
      },
      {
        id: 1,
        fullName: 'Johnson Gallak',
        thumbnail: '../../../assets/creator.jpg'
      },
      {
        id: 1,
        fullName: 'Johnson Gallak',
        thumbnail: '../../../assets/creator.jpg'
      },
      {
        id: 1,
        fullName: 'Johnson Gallak',
        thumbnail: '../../../assets/creator.jpg'
      },
      {
        id: 1,
        fullName: 'Johnson Gallak',
        thumbnail: '../../../assets/creator.jpg'
      },
      {
        id: 1,
        fullName: 'Johnson Gallak',
        thumbnail: '../../../assets/creator.jpg'
      },
    ] */
  }

  ngOnInit() {
    this.getCreators();
  }

  getCreators() {
    this.apiMarvel.getCreators().subscribe((data: any) => {
      console.log('show me the data inside events', data.data?.results);
      for(let item of data.data?.results) {
        let creator: Creator = {
          id: item.id,
          fullName: item.fullName,
          thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
        }
        console.log('show me the creator', creator);
        this.creatorsList.push(creator);
      }
    });
  }
}
