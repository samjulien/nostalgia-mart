import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VideoGamesService {
  private API_URL = '/api';

  constructor(private http: HttpClient) {}

  getSnesGames() {
    return this.http.get(`${this.API_URL}/games/snes`);
  }
}
