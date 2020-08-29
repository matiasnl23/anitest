export interface SearchResponse<T> {
  request_hash: string;
  request_cached: boolean;
  request_cached_expiry: number;
  results: T[];
}

export interface AnimeResponse {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  mal_id: number;
  url: string;
  image_url: string;
  trailer_url: string | null;
  title: string;
  title_english: string;
  title_japanese: string | null;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
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
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string;
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

export interface ExtendedInfo {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}
