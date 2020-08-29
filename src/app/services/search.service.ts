import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { JikanResponse } from '../interfaces/response.interface';
import { SearchAnimeResult, SearchQueryParams } from '../interfaces/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  searchAnime(queryParams: SearchQueryParams):
    Observable<JikanResponse<SearchAnimeResult>> {
      return this.http.get<JikanResponse<SearchAnimeResult>>(
        `${this.API_URL}/search/anime`,
        { params: queryParams as any }
      );
  }
}
