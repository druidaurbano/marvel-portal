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
    //this.step.name = 'quadrinhos';
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

  searchStuff(stuff: Search) {
    console.log('show me the stuff', stuff);
    switch(stuff.id) {
      case 0:
        console.log('procurando em quadrinhos...');
        this.search = stuff.text;
        break;
      case 1:
        console.log('procurando em eventos...');
        this.search = stuff.text;
        break;
      case 2:
        console.log('procurando em criadores...');
        this.search = stuff.text;
        break;
      case 3:
        console.log('procurando em personagens...');
        this.search = stuff.text;
        break;
      default:
        console.log('procurando em tudo');
    }
  }

}
