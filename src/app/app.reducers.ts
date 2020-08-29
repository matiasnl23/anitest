import { ActionReducerMap } from '@ngrx/store';
import * as search from './reducers/search/search.reducer';

export interface AppState {
    search: search.State;
}

export const appReducers: ActionReducerMap<AppState> = {
    search: search.reducer
};