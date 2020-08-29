import { createAction, props } from '@ngrx/store';
import { ElementType } from '../../enums/element-type.enum';
import { Anime, ShortAnimeInfo, BaseAnime } from '../../interfaces/anime.interface';

export const setQuery = createAction(
    '[Search] Set query',
    props<{query: string}>()
);

export const setSearchType = createAction(
    '[Search] Set search type',
    props<{ searchType: ElementType }>()
);

export const updateResults = createAction(
    '[Search] Update results',
    props<{results: ShortAnimeInfo[]}>()
);

export const preFillSelected = createAction(
    '[Results] Fill with selected',
    props<{selected: BaseAnime}>()
);
