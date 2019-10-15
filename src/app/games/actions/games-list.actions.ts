import { createAction, props } from '@ngrx/store';

export const setPlatform = createAction(
  '[Games List] Choose platform',
  props<{ platform: string }>()
);
