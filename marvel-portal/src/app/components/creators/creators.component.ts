import { Component } from '@angular/core';
import { Creator } from 'src/app/models/creator.model';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent {
  creatorsList: Array<Creator> = [];

  constructor() {
    this.creatorsList = [
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
    ]
  }
}
