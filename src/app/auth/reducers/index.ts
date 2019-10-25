import * as fromRoot from '@nostalgia-mart/reducers';
import * as fromAuthStatus from '@nostalgia-mart/auth/reducers/auth.reducer';
import {
  combineReducers,
  Action,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromAuthStatus.authStatusFeatureKey]: fromAuthStatus.State;
}

export interface State extends fromRoot.State {
  [authFeatureKey]: AuthState;
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromAuthStatus.authStatusFeatureKey]: fromAuthStatus.reducer,
  })(state, action);
}

export const selectAuthState = createFeatureSelector<State, AuthState>(
  authFeatureKey
);

export const selectAuthStatus = createSelector(
  selectAuthState,
  (state: AuthState) => state[fromAuthStatus.authStatusFeatureKey]
);

export const selectUser = createSelector(
  selectAuthStatus,
  fromAuthStatus.selectUser
);

export const selectAccessToken = createSelector(
  selectAuthStatus,
  fromAuthStatus.selectAccessToken
);

export const selectIsAuthenticated = createSelector(
  selectAuthStatus,
  fromAuthStatus.selectIsAuthenticated
);
