import { Component, SimpleChanges } from '@angular/core';
import { StepHome } from './models/step.model';
import { ApiMarvelService } from './services/api-marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  step: StepHome = {name: 'home'};
  posts: any[] = [];
  details: any;

  title = 'marvel-portal';
  constructor(
    private apiService: ApiMarvelService
  ) {
    this.step.name = 'home';
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('show me the changes app', changes);
  }

  changeStep(newStep: any) {
    console.log('chegou em newStep', newStep?.step);
    this.step.name = newStep?.step;
  }

  openDetails(e: any) {
    console.log('show me the element', e);
    this.step = { name: 'details'};
    this.details = e.element.id;
  }



}
