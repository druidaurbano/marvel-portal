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
    this.step.name = 'criadores';
  }

  ngOnInit() {
    this.apiService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
      console.log('show me data', data);
      console.log('show me the posts', this.posts);
    });

    this.apiService.getComics().subscribe((data: any[]) => {
      this.posts = data;
      console.log('show me data', data);
      console.log('show me the posts', this.posts);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('show me the changes app', changes);
  }

  changeStep(newStep: any) {
    console.log('chegou em newStep', newStep?.footerStep);
    this.step.name = newStep?.footerStep;
  }

}
