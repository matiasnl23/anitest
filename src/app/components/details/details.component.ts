import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

import { Subscription } from 'rxjs';
import { Anime } from '../../interfaces/anime.interface';
import * as fromSearch from '../../reducers/search';
import { AnimeService } from '../../services/anime.service';
import { filter, pluck, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  selected: Anime | null = null;

  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private animeService: AnimeService
  ) { }

  ngOnInit(): void {
    this.loadSelectedFromStore();
    this.loadOtherData();
  }

  loadSelectedFromStore(): void {
    const subs = this.store.pipe(
      select(fromSearch.getSelected)
    ).subscribe((selected) => {
      if (selected) {
        this.selected = selected;
      } else {
        this.router.navigate(['results']);
      }
    });

    this.subscriptions.push(subs);
  }

  loadOtherData(): void {
    const subs = this.store.pipe(
      select(fromSearch.getSelected),
      tap((anime) => console.log('pre filter', anime)),
      filter((anime) => anime !== null),
      pluck('mal_id'),
      tap((id) => console.log('pre distict', id)),
      distinctUntilChanged(),
      tap((id) => console.log('post distict', id)),
      switchMap((id: any) => this.animeService.getMainInfo(id))
    ).subscribe(console.log);

    this.subscriptions.push(subs);
  }
}
