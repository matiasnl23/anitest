import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { tap } from 'rxjs/operators';
import { ShortAnimeInfo, BaseAnime } from '../../interfaces/anime.interface';
import { AppState } from 'src/app/app.reducers';
import * as fromSearch from '../../reducers/search';
import * as fromSearchActions from '../../reducers/search/search.actions';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {

  results: ShortAnimeInfo[] = [];

  subscriptions: Subscription[] = [];

  constructor(
    private store: Store<AppState>,
    private router: Router
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
    ).subscribe(results => {
      this.results = results;

      if (this.results.length === 0) {
        this.router.navigate(['search']);
      }
    });

    this.subscriptions.push(subs);
  }

  selectItem(selected: ShortAnimeInfo): void {
    this.store.dispatch(fromSearchActions.preFillSelected({ selected }));

    this.router.navigate(['details']);
  }
}
