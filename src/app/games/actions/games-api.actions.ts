import { createAction, props } from '@ngrx/store';

import { Game } from '@nostalgia-mart/games/models/game';

export const loadNesGames = createAction('[Games API] Load NES Games');
export const loadSnesGames = createAction('[Games API] Load SNES Games');
export const loadGamesSuccess = createAction(
  '[Games API] Load Games Success',
  props<{ games: Game[] }>()
);

export const selectGameSuccess = createAction(
  '[Games API] Select Game Success',
  props<{ game: Game }>()
);
