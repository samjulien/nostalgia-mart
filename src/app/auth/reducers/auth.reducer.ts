import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '@nostalgia-mart/auth/actions';

export const authStatusFeatureKey = 'authStatus';

export interface State {
  user: any;
  isAuthenticated: boolean;
  token: string;
}

export const initialState: State = {
  user: null,
  isAuthenticated: false,
  token: '',
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.loadUserSuccess, (state, { user }) => {
    return {
      ...state,
      user,
    };
  }),
  on(
    AuthActions.checkAuthSuccess,
    AuthActions.setNotAuthenticated,
    (state, { isAuthenticated }) => {
      return {
        ...state,
        isAuthenticated,
      };
    }
  )
);

export const selectUser = (state: State) => state.user;
export const selectIsAuthenticated = (state: State) => state.isAuthenticated;
export const selectAccessToken = (state: State) => state.token;
