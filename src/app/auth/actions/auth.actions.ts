import { createAction, props } from '@ngrx/store';
import { AuthPayload } from '../models/auth-payload';

export const logIn = createAction('[Auth] Log in');
export const logOut = createAction('[Auth] Log out');
export const handleRedirect = createAction('[Auth] Handle redirct');
export const loginSuccess = createAction(
  '[Auth] Log in success',
  props<{ payload: AuthPayload }>()
);
export const loginError = createAction(
  '[Auth] Log in error',
  props<{ error: string }>()
);
