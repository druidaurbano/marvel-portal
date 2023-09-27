import { Component, SimpleChanges } from '@angular/core';
import { StepHome } from './models/step.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  step: StepHome = {name: 'home'};

  title = 'marvel-portal';
  constructor() {
    this.step.name = 'criadores';
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('show me the changes app', changes);
  }

  changeStep(newStep: any) {
    console.log('chegou em newStep', newStep?.footerStep);
    this.step.name = newStep?.footerStep;
  }

}
