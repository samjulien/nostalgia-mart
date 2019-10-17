import { createAction, props } from '@ngrx/store';

import { Game } from '@nostalgia-mart/games/models/game';

export const addGame = createAction(
  '[Selected Game Page] Add Game',
  props<{ game: Game }>()
);

export const removeGame = createAction(
  '[Selected Game Page] Remove Game',
  props<{ game: Game }>()
);
