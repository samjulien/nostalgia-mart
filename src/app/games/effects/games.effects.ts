import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VideoGamesService } from '@nostalgia-mart/core/services';
import {
  GamesApiActions,
  GamesListActions,
} from '@nostalgia-mart/games/actions';
import { mergeMap, map, switchMap } from 'rxjs/operators';
import { PLATFORMS } from '../models/platforms.dictionary';
import { of } from 'rxjs';

@Injectable()
export class GamesEffects {
  setPlatform$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesListActions.setPlatform),
      switchMap(action => {
        switch (action.platform) {
          case PLATFORMS.NES:
            return of(GamesApiActions.loadNesGames());
          case PLATFORMS.SNES:
            return of(GamesApiActions.loadSnesGames());
        }
      })
    )
  );

  loadNesGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesApiActions.loadNesGames.type),
      mergeMap(() =>
        this.videoGamesService
          .getNesGames()
          .pipe(map(games => GamesApiActions.loadGamesSuccess({ games })))
      )
    )
  );

  loadSnesGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesApiActions.loadSnesGames.type),
      mergeMap(() =>
        this.videoGamesService
          .getSnesGames()
          .pipe(map(games => GamesApiActions.loadGamesSuccess({ games })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private videoGamesService: VideoGamesService
  ) {}
}
