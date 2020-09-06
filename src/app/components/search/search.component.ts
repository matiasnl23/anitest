import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { distinctUntilChanged, debounceTime, switchMap, tap } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { SeasonService } from '../../services/season.service';
import { SeasonAnime } from '../../interfaces/anime.interface';

import { AppState } from '../../app.reducers';
import * as fromSearch from '../../reducers/search/search.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl;

  seasonAnime: SeasonAnime[] = [];

  constructor(
    private store: Store<AppState>,
    private searchService: SearchService,
    private seasonService: SeasonService,
    private router: Router
  ) {
    this.searchControl = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
    this.handleSearchbox();

    this.getSeason();
  }

  handleSearchbox(): void {
    this.searchControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(1000),
      tap((query) => this.store.dispatch(fromSearch.setQuery({ query }))),
      switchMap((query) => this.searchService.searchAnime({ q: query }))
    ).subscribe(({ results }) => {
      this.store.dispatch(fromSearch.updateResults({ results }));

      if (results.length === 0) {
        alert('No se ha encontrado ningún resultado.');
      } else {
        this.router.navigate(['results']);
      }
    }, () => {
      alert('Ha ocurrido un error.');
      this.handleSearchbox();
    });
  }

  getSeason(): void {
    this.seasonService.getSeason().subscribe((resp) => {
      this.seasonAnime = resp.anime;
    });
  }

}
