import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { ComicsModule } from './components/comics/comics.module';
import { EventsModule } from './components/events/events.module';
import { CreatorsModule } from './components/creators/creators.module';
import { CharactersModule } from './components/characters/characters.module';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe, registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { DetailsModule } from './components/details/details.module';
import { LoadingModule } from './components/loading/loading.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    HeaderModule,
    ComicsModule,
    EventsModule,
    CreatorsModule,
    CharactersModule,
    HttpClientModule,
    DetailsModule,
    LoadingModule,
    InfiniteScrollModule
  ],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'pt-br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
