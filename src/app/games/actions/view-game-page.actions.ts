import { createAction, props } from '@ngrx/store';

export const selectGame = createAction(
  '[View Game Page] Select Game',
  props<{ id: string }>()
);
