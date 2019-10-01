import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Game } from '@nostalgia-mart/games/models/game';

@Injectable({
  providedIn: 'root',
})
export class VideoGamesService {
  private API_URL = '/api';

  constructor(private http: HttpClient) {}

  getSnesGames(): Observable<Game[]> {
    return this.http
      .get<Game[]>(`${this.API_URL}/games/snes`)
      .pipe(map(games => games.map(g => this.addFields(g))));
  }

  getNesGames(): Observable<Game[]> {
    return this.http
      .get<Game[]>(`${this.API_URL}/games/nes`)
      .pipe(map(games => games.map(g => this.addFields(g))));
  }

  addFields(game) {
    game.excerpt = game.summary
      ? game.summary.substring(0, 200) + '...'
      : 'No summary available.';
    const screenshot = game.screenshots.filter(pic => {
      if (pic.height / pic.width <= 1) {
        return pic;
      }
    })[0];
    game.screenshotUrl = `https://images.igdb.com/igdb/image/upload/t_original/${screenshot.image_id}.jpg`;
    game.coverUrl = `https://images.igdb.com/igdb/image/upload/t_original/${game.cover.image_id}.jpg`;
    return game;
  }
}
