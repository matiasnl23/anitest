import { Component, OnInit, OnDestroy } from '@angular/core';
import { State, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { SearchAnimeResult } from '../../interfaces/search.interface';
import { AppState } from 'src/app/app.reducers';
import * as fromSearch from '../../reducers/search';
import { tap } from 'rxjs/operators';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {

  results: SearchAnimeResult[];

  subscriptions: Subscription[] = [];

  constructor(
    private store: State<AppState>
  ) { }

  ngOnInit(): void {
    this.loadSearchResults();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  loadSearchResults(): void {
    const subs = this.store.pipe(
      select(fromSearch.getResults),
      tap(console.log),
    ).subscribe(results => this.results = results);

    this.subscriptions.push(subs);
  }

  selectItem(selected: SearchAnimeResult): void {
    console.log(selected);
  }
}
