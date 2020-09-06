import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SeasonResponse } from '../interfaces/response.interface';

@Injectable({
    providedIn: 'root'
})
export class SeasonService {

    API_URL = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getSeason(): Observable<SeasonResponse> {
        return this.http.get<SeasonResponse>(`${this.API_URL}/season`);
    }
}