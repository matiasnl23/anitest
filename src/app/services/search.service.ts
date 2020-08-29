import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { SearchResponse } from '../interfaces/response.interface';
import { SearchQueryParams } from '../interfaces/search.interface';
import { ShortAnimeInfo } from '../interfaces/anime.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  searchAnime(queryParams: SearchQueryParams):
    Observable<SearchResponse<ShortAnimeInfo>> {
      return this.http.get<SearchResponse<ShortAnimeInfo>>(
        `${this.API_URL}/search/anime`,
        { params: queryParams as any }
      );
  }
}
