import { ExtendedInfo } from './extended-info.interface';

export interface BaseAnime {
    mal_id: number;
    url: string;
    image_url: string;
    title: string;
    airing: boolean;
    synopsis: string;
    type: string;
    episodes: number | null;
    score: number | null;
    members: number | null;
}

export interface ShortAnimeInfo extends BaseAnime {
    start_date: string | null;
    end_date: string | null;
    rated: string | null;
}

export interface Anime extends BaseAnime {
  trailer_url: string | null;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[];
  source: string | null;
  status: string | null;
  aired: {
    from: string | null;
    to: string | null;
    prop: {
      from: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
      to: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
    };
    string: string | null;
  };
  duration: string | null;
  rating: string | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  favorites: number | null;
  background: string | null;
  premiered: string | null;
  broadcast: string | null;
  related: {
    Adaptation: ExtendedInfo[];
    'Alternatie setting': ExtendedInfo[];
    Sequel: ExtendedInfo[];
    Other: ExtendedInfo[];
    'Alternative version': ExtendedInfo[];
  };
  producers: ExtendedInfo[];
  licensors: ExtendedInfo[];
  studios: ExtendedInfo[];
  genres: ExtendedInfo[];
  opening_themes: string[];
  ending_themes: string[];
}