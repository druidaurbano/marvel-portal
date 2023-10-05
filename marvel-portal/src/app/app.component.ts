import { Component, SimpleChanges } from '@angular/core';
import { StepHome } from './models/step.model';
import { ApiMarvelService } from './services/api-marvel.service';
import { Search } from './models/search.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  step: StepHome = {name: 'home'};
  posts: any[] = [];
  details: any;
  search: any;

  title = 'marvel-portal';
  constructor(
    private marvelService: ApiMarvelService
  ) {
    this.step.name = 'home';
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  changeStep(newStep: any) {
    this.step.name = newStep?.step;
  }

  openDetails(e: any) {
    this.step = { name: 'details'};
    this.details = e.element.id;
  }

  searchStuff(stuff: Search) {
    switch(stuff.id) {
      case 0:
        this.search = stuff.text;
        break;
      case 1:
        this.search = stuff.text;
        break;
      case 2:
        this.search = stuff.text;
        break;
      case 3:
        this.search = stuff.text;
        break;
      default:
        console.log('procurando em tudo');
    }
  }

}
