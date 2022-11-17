import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { NavComponent } from './nav/nav.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MoviesDeteilsComponent } from './movies-deteils/movies-deteils.component';
import { SearchPipe } from './search.pipe';
import { TvDeteliesComponent } from './tv-detelies/tv-detelies.component';
import { StarsDetailsComponent } from './stars-details/stars-details.component';
import { SearchTvPipe } from './search-tv.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TvComponent,
    MoviesComponent,
    NavComponent,
    LogInComponent,
    RegisterComponent,
    NotFoundComponent,
    FooterComponent,
    MoviesDeteilsComponent,
    SearchPipe,
    TvDeteliesComponent,
    StarsDetailsComponent,
    SearchTvPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
