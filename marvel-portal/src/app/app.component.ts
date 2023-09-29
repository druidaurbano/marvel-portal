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

  title = 'marvel-portal';
  constructor(
    private apiService: ApiMarvelService
  ) {
    this.step.name = 'home';
  }

  ngOnInit() {
    this.getCharacters();
    //this.getComics();
    this.getCreators();
    this.getEvents();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('show me the changes app', changes);
  }

  changeStep(newStep: any) {
    console.log('chegou em newStep', newStep?.footerStep);
    this.step.name = newStep?.footerStep;
  }

  getCharacters() {
    this.apiService.getCharacters().subscribe((data: any[]) => {
      this.posts = data;
      console.log('show me data from Characters', data);
      //console.log('show me the posts', this.posts);
    });
  }

  /* getComics() {
    this.apiService.getComics().subscribe((data: any[]) => {
      this.posts = data;
      console.log('show me data from Comics', data);
      //console.log('show me the posts', this.posts);
    });
  } */

  getCreators() {
    this.apiService.getCreators().subscribe((data: any[]) => {
      this.posts = data;
      console.log('show me data from Creators', data);
      //console.log('show me the posts', this.posts);
    });
  }

  getEvents() {
    this.apiService.getEvents().subscribe((data: any[]) => {
      this.posts = data;
      console.log('show me data from Events', data);
      //console.log('show me the posts', this.posts);
    });
  }



}
