import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Anime } from '../interfaces/anime.interface';
import { Observable } from 'rxjs';
import { AnimeResponse } from '../interfaces/response.interface';
import { ShortAnimeInfo } from '../interfaces/anime.interface';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {}

  /**
   * Recuperar la información del anime en base al ID
   *
   * @param id id del anime en MAL
   */
  getMainInfo(id: number): Observable<AnimeResponse> {
    return this.http.get<AnimeResponse>(`${this.API_URL}/anime/${id}`);
  }
}
