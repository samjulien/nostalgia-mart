import {
  createFeatureSelector,
  Action,
  combineReducers,
  createSelector,
} from '@ngrx/store';
import * as fromGamesList from '@nostalgia-mart/games/reducers/games-list.reducer';
import * as fromGame from '@nostalgia-mart/games/reducers/game.reducer';
import * as fromRoot from '@nostalgia-mart/reducers';
import * as fromCollection from '@nostalgia-mart/games/reducers/collection.reducer';

export const gamesFeatureKey = 'games';

export interface GamesState {
  [fromGamesList.gamesListFeatureKey]: fromGamesList.State;
  [fromGame.gameFeatureKey]: fromGame.State;
  [fromCollection.collectionFeatureKey]: fromCollection.State;
}

export interface State extends fromRoot.State {
  [gamesFeatureKey]: GamesState;
}

export function reducers(state: GamesState | undefined, action: Action) {
  return combineReducers({
    [fromGamesList.gamesListFeatureKey]: fromGamesList.reducer,
    [fromGame.gameFeatureKey]: fromGame.reducer,
    [fromCollection.collectionFeatureKey]: fromCollection.reducer,
  })(state, action);
}

export const selectGamesState = createFeatureSelector<State, GamesState>(
  gamesFeatureKey
);

export const selectGamesListState = createSelector(
  selectGamesState,
  (state: GamesState) => state.gamesList
);

export const selectGamesListLoading = createSelector(
  selectGamesListState,
  fromGamesList.getLoading
);

export const selectGamesListLoaded = createSelector(
  selectGamesListState,
  fromGamesList.getLoaded
);

export const selectGamesListGames = createSelector(
  selectGamesListState,
  fromGamesList.getGames
);

export const selectGamesListPlatform = createSelector(
  selectGamesListState,
  fromGamesList.getSelectedPlatform
);

export const selectGameState = createSelector(
  selectGamesState,
  (state: GamesState) => state.game
);

export const selectGameId = createSelector(
  selectGameState,
  fromGame.selectId
);

export const selectGame = createSelector(
  selectGameState,
  fromGame.selectGame
);

export const selectCollectionState = createSelector(
  selectGamesState,
  (state: GamesState) => state.collection
);

export const selectCollectionLoading = createSelector(
  selectCollectionState,
  fromCollection.getLoading
);

export const selectCollectionLoaded = createSelector(
  selectCollectionState,
  fromCollection.getLoaded
);

export const selectCollection = createSelector(
  selectCollectionState,
  fromCollection.getCollection
);
