import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { DetailsModule } from '../details/details.module';
import { LoadingModule } from '../loading/loading.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    DetailsModule,
    LoadingModule,
    InfiniteScrollModule
  ],
  exports: [CharactersComponent]
})
export class CharactersModule { }
