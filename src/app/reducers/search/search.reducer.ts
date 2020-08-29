import { Inject } from '@angular/core';
import { createReducer, on, Action } from '@ngrx/store';
import { ElementType } from '../../enums/element-type.enum';
import { ShortAnimeInfo, Anime } from '../../interfaces/anime.interface';
import { AnimeService } from '../../services/anime.service';
import * as actions from './search.actions';

// INTERFACE
export interface State {
    type: ElementType;
    query: string;
    results: ShortAnimeInfo[];
    selected: Anime | null;
}

// INITIAL STATE
export const initialState: State = {
    query: '',
    type: ElementType.ANIME,
    results: [],
    selected: null,
};

const animeService = Inject(AnimeService);

const searchReducer = createReducer<State>(
    initialState,
    on(actions.setQuery, (state, { query }) => ({ ...state, query })),
    on(actions.setSearchType, (state, { searchType }) => ({ ...state, type: searchType })),
    on(actions.updateResults, (state, { results }) => ({ ...state, results })),
    on(actions.preFillSelected, (state, { selected }) => ({ ...state, selected: animeService.fillWithSelected(selected) }))
)

export function reducer(state: State | undefined, action: Action): State {
    return searchReducer(state, action);
}