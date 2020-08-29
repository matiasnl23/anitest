import { createAction, props } from '@ngrx/store';
import { SearchAnimeResult } from '../../interfaces/search.interface';
import { ElementType } from '../../enums/element-type.enum';

export const setQuery = createAction(
    '[Search] Set query',
    props<{query: string}>()
);

export const setSearchType = createAction(
    '[Search] Set search type',
    props<{type: ElementType}>()
);

export const updateResults = createAction(
    '[Search] Update results',
    props<{results: SearchAnimeResult[]}>()
);
