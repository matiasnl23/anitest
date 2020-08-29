import { Anime } from './anime.interface';

export interface BaseResponse {
  request_hash: string;
  request_cached: boolean;
  request_cached_expiry: number;
}

export interface SearchResponse<T> extends BaseResponse {
  results: T[];
}

export interface AnimeResponse extends BaseResponse, Anime {}
