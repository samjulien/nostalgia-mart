import { createReducer, on } from '@ngrx/store';

import { GamesApiActions } from '@nostalgia-mart/games/actions';
import { Game } from '@nostalgia-mart/games/models/game';

export const collectionFeatureKey = 'collection';

export interface State {
  loading: boolean;
  loaded: boolean;
  collection: Game[];
}

export const initialState: State = {
  loading: false,
  loaded: false,
  collection: [],
};

export const reducer = createReducer(
  initialState,
  on(GamesApiActions.loadCollection, state => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(GamesApiActions.loadCollectionSuccess, (state, { collection }) => ({
    ...state,
    loading: false,
    loaded: true,
    collection,
  }))
);

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getCollection = (state: State) => state.collection;
