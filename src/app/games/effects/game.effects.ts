import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VideoGamesService } from '@nostalgia-mart/core/services';
import {
  ViewGamePageActions,
  GamesApiActions,
} from '@nostalgia-mart/games/actions';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class GameEffects {
  loadGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ViewGamePageActions.selectGame),
      mergeMap(action =>
        this.videoGamesService
          .getSingleGame(action.id)
          .pipe(map(game => GamesApiActions.selectGameSuccess({ game })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private videoGamesService: VideoGamesService
  ) {}
}
