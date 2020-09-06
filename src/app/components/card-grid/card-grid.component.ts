import { Component, OnInit, Input, AfterContentInit, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BaseAnime } from '../../interfaces/anime.interface';
import * as fromSearch from 'src/app/reducers/search/search.reducer';
import * as fromSearchActions from 'src/app/reducers/search/search.actions';
import chunkData from '../../helpers/chunk';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit, AfterViewInit {

  @Input()
  results: BaseAnime[] = [];

  chunked: Array<BaseAnime[]> = [];

  constructor(
    private store: Store<fromSearch.State>,
    private bpo: BreakpointObserver,
    private router: Router
  ) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.bpo.observe([
      Breakpoints.XSmall,
    ]).subscribe((result) => {
      if (result.matches) {
        this.chunkWith(1);
      }
    });

    this.bpo.observe([
      Breakpoints.Small,
      Breakpoints.Medium,
    ]).subscribe((result) => {
      if (result.matches) {
        this.chunkWith(2);
      }
    });

    this.bpo.observe([
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe((result) => {
      if (result.matches) {
        this.chunkWith(4);
      }
    });
  }


  chunkWith(size: number): void {
    this.chunked = chunkData(size, this.results);
    console.log(this.chunked);
  }

  selectItem(selected: BaseAnime): void {
    this.store.dispatch(fromSearchActions.preFillSelected({ selected }));
    this.router.navigate(['details']);
  }
}
