import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LayoutModule } from '@angular/cdk/layout';

import { SearchComponent } from './components/search/search.component';
import { NebularModule } from './shared/nebular.module';
import { ResultsComponent } from './components/results/results.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducers } from './app.reducers';
import { DetailsComponent } from './components/details/details.component';
import { CardGridComponent } from './components/card-grid/card-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    DetailsComponent,
    CardGridComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NebularModule,
    HttpClientModule,
    LayoutModule,
    ScrollingModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
