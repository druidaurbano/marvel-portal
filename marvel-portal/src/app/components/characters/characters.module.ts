import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { DetailsModule } from '../details/details.module';



@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    DetailsModule
  ],
  exports: [CharactersComponent]
})
export class CharactersModule { }
