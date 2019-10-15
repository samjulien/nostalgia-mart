import { createReducer, on } from '@ngrx/store';

import {
  GamesListActions,
  GamesApiActions,
} from '@nostalgia-mart/games/actions';
import { Game } from '@nostalgia-mart/games/models/game';

export const gamesListFeatureKey = 'gamesList';

export interface State {
  loading: boolean;
  loaded: boolean;
  platform: string;
  games: Game[];
}

export const initialState: State = {
  loading: false,
  loaded: false,
  platform: '',
  games: [],
};

export const reducer = createReducer(
  initialState,
  on(GamesApiActions.loadGamesSuccess, (state, { games }) => ({
    ...state,
    loading: false,
    loaded: true,
    games,
  })),
  on(GamesListActions.setPlatform, (state, { platform }) => ({
    ...state,
    games: [],
    loading: true,
    platform,
  }))
);

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getGames = (state: State) => state.games;
export const getSelectedPlatform = (state: State) => state.platform;
