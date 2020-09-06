import { AppState } from '../../app.reducers';
import { createSelector } from '@ngrx/store';
import * as search from './search.reducer';

export const selectSearchFeature = (state: AppState) => state.search;

export const getQuery = createSelector(
  selectSearchFeature,
  (state: search.State) => state.query
);

export const getType = createSelector(
  selectSearchFeature,
  (state: search.State) => state.type
);

export const getResults = createSelector(
  selectSearchFeature,
  (state: search.State) => state.results
);

export const getSelected = createSelector(
  selectSearchFeature,
  (state: search.State) => state.selected
);
