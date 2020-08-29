import { createReducer, on, Action } from '@ngrx/store';
import { SearchAnimeResult } from '../../interfaces/search.interface';
import { ElementType } from '../../enums/element-type.enum';
import * as actions from './search.actions';

// INTERFACE
export interface State {
    type: ElementType;
    query: string;
    results: SearchAnimeResult[];
}

// INITIAL STATE
export const initialState: State = {
    query: '',
    type: ElementType.ANIME,
    results: []
};

const searchReducer = createReducer<State>(
    initialState,
    on(actions.setQuery, (state, { query }) => ({ ...state, query })),
    on(actions.setSearchType, (state, { searchType }) => ({ ...state, type: searchType })),
    on(actions.updateResults, (state, { results }) => ({ ...state, results }))
)

export function reducer(state: State | undefined, action: Action): State {
    return searchReducer(state, action);
}