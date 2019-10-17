import { on, createReducer } from '@ngrx/store';
import { ViewGamePageActions } from '../actions';
import { GamesApiActions } from '@nostalgia-mart/games/actions';

import { Game } from '../models/game';

export const gameFeatureKey = 'game';

export interface State {
  selectedGameId: string | null;
  selectedGame: Game;
}

export const initialState: State = {
  selectedGameId: null,
  selectedGame: null,
};

export const reducer = createReducer(
  initialState,
  on(ViewGamePageActions.selectGame, (state, { id }) => ({
    ...state,
    selectedGameId: id,
  })),
  on(GamesApiActions.selectGameSuccess, (state, { game }) => ({
    ...state,
    selectedGame: game,
  }))
);

export const selectId = (state: State) => state.selectedGameId;
export const selectGame = (state: State) => state.selectedGame;
