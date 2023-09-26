import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';



@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule
  ],
  exports: [CharactersComponent]
})
export class CharactersModule { }
