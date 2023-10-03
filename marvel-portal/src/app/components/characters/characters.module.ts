import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { DetailsModule } from '../details/details.module';
import { LoadingModule } from '../loading/loading.module';



@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    DetailsModule,
    LoadingModule
  ],
  exports: [CharactersComponent]
})
export class CharactersModule { }
