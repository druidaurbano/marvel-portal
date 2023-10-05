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

  constructor(
    private apiMarvel: ApiMarvelService
  ) {

  }

  ngOnInit() {
  }

  goBack() {
    this.changeStep.emit();
  }
}
