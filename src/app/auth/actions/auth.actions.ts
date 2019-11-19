import { createAction, props } from '@ngrx/store';

export const initializeAuth = createAction('[Auth] Initialize auth');

export const logIn = createAction('[Auth] Log in');
export const logOut = createAction(
  '[Auth] Log out'
);

export const handleRedirect = createAction('[Auth] Handle redirct');
export const handleRedirectSuccess = createAction(
  '[Auth] Handle redirect success',
  props<{ targetRoute: string }>()
);

export const loadUser = createAction('[Auth] Load user');
export const loadUserSuccess = createAction(
  '[Auth] Load user success',
  props<{ user: any }>()
);

export const checkAuth = createAction('[Auth] Check auth');
export const checkAuthSuccess = createAction(
  '[Auth] Check auth success',
  props<{ isAuthenticated: boolean }>()
);
export const setNotAuthenticated = createAction(
  '[Auth] Not authenticated',
  props<{ isAuthenticated: boolean }>()
);
