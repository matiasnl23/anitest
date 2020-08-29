import { Injectable } from '@angular/core';
import {
  BaseAnime,
  Anime,
  ShortAnimeInfo,
} from '../interfaces/anime.interface';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor() {}

  /**
   * Precargar los datos del elemento seleccionado
   *
   * @param selected resultado seleccionado
   */
  static fillWithSelected(selected: BaseAnime): Anime {
    console.log(selected);

    return {
      ...selected,
      trailer_url: null,
      title_english: null,
      title_japanese: null,
      title_synonyms: [],
      source: null,
      status: null,
      aired: {
        from: null,
        to: null,
        prop: {
          from: {
            day: null,
            month: null,
            year: null,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: null,
      },
      duration: null,
      rating: null,
      scored_by: null,
      rank: null,
      popularity: null,
      favorites: null,
      background: null,
      premiered: null,
      broadcast: null,
      related: {
        Adaptation: [],
        'Alternatie setting': [],
        Sequel: [],
        Other: [],
        'Alternative version': [],
      },
      producers: [],
      licensors: [],
      studios: [],
      genres: [],
      opening_themes: [],
      ending_themes: [],
    };
  }
}
