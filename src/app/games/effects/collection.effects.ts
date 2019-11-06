import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GamesApiActions } from '@nostalgia-mart/games/actions';
import { VideoGamesService } from '@nostalgia-mart/core/services';
import { exhaustMap, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class CollectionEffects {
  loadCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesApiActions.loadCollection),
      exhaustMap(action =>
        this.videoGamesService
          .getCollection(action.userId)
          .pipe(
            map(collection =>
              GamesApiActions.loadCollectionSuccess({ collection })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private videoGamesService: VideoGamesService
  ) {}
}
