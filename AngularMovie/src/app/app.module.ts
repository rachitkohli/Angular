import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { CardRecordsComponent } from './card-records/card-records.component';
import { CardUpdateComponent } from './card-update/card-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    ConvertToSpacesPipe,
    StarComponent,
    CardRecordsComponent,
    CardUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'movies', component: MoviesComponent},
      {path: 'card-records', component: CardRecordsComponent},
      {path: 'card-update', component: CardUpdateComponent},
      {path: 'card-update/:pmId', component: CardUpdateComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo:'home', pathMatch: 'full'}
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
