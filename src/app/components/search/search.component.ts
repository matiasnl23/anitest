import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { distinctUntilChanged, debounceTime, switchMap, tap } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';

import { AppState } from '../../app.reducers';
import * as fromSearch from '../../reducers/search/search.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl;

  constructor(
    private store: Store<AppState>,
    private searchService: SearchService,
    private router: Router
  ) {
    this.searchControl = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
    this.handleSearchbox();
  }

  handleSearchbox(): void {
    this.searchControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(1000),
      tap((query) => this.store.dispatch(fromSearch.setQuery({ query }))),
      switchMap((query) => this.searchService.searchAnime({ q: query }))
    ).subscribe(({ results }) => {
      this.store.dispatch(fromSearch.updateResults({ results }));
      this.router.navigate(['results']);
    }, () => {
      alert('Ha ocurrido un error.');
      this.handleSearchbox();
    });
  }

}
