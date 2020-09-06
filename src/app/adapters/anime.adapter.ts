import { ShortAnimeInfo, Anime, BaseAnime } from '../interfaces/anime.interface';

export class AnimeAdapter {
  static adaptShortInfo(short: BaseAnime): Anime {
    return {
      mal_id: short.mal_id,
      url: short.url,
      title: short.title,
      title_english: null,
      title_japanese: null,
      title_synonyms: [],
      image_url: short.image_url,
      trailer_url: null,
      type: short.type,
      source: null,
      status: null,
      synopsis: short.synopsis,
      episodes: short.episodes,
      score: short.score,
      members: short.members,
      airing: null,
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
