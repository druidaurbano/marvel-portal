import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Detail } from 'src/app/models/detail.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() details: any;
  @Output() changeStep = new EventEmitter<any>();
  detail: Detail = {};

  constructor(
    private apiMarvel: ApiMarvelService
  ) {

  }

  ngOnInit() {
    console.log('show me details', this.details);
    //this.getComic(this.details);
  }

  /* getComic(id: number) {
    console.log('getting comic id:', id);
    //let comic = this.apiMarvel.getComicsById(id);
    this.apiMarvel.getComicsById(id).subscribe((data: any) => {
      console.log('show me the data from comic', data);
      let comic = data.data.results[0];
      this.detail = {
        thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
      }
    });
    //console.log('show me the comic', comic);
  } */

  goBack() {
    this.changeStep.emit();
  }
}
