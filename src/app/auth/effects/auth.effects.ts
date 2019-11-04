import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { AuthActions } from '@nostalgia-mart/auth/actions';
import { AuthService } from '@nostalgia-mart/auth/services';
import { tap, concatMap, exhaustMap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EMPTY, of } from 'rxjs';

@Injectable()
export class AuthEffects {
  handleRedirect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.handleRedirect),
      exhaustMap(() => {
        const params = window.location.search;
        if (params.includes('code=') && params.includes('state=')) {
          return this.authService.handleRedirectCallback$.pipe(
            map((cbRes: any) => {
              const targetRoute =
                cbRes.appState && cbRes.appState.target
                  ? cbRes.appState.target
                  : '/';
              return AuthActions.handleRedirectSuccess({ targetRoute });
            }),
            catchError(err => of(err))
          );
        }
        return EMPTY;
      })
    )
  );

  handleRedirectSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.handleRedirectSuccess),
        tap(({ targetRoute }) => this.router.navigate([targetRoute]))
      ),
    { dispatch: false }
  );

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logIn),
        tap(() => {
          this.authService.login();
        })
      ),
    { dispatch: false }
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadUser, AuthActions.checkAuthSuccess),
      exhaustMap(() =>
        this.authService
          .getUser$()
          .pipe(map(user => AuthActions.loadUserSuccess({ user })))
      )
    )
  );

  checkAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkAuth, AuthActions.handleRedirectSuccess),
      concatMap(() =>
        this.authService.isAuthenticated$.pipe(
          map(isAuthenticated =>
            isAuthenticated
              ? AuthActions.checkAuthSuccess({ isAuthenticated })
              : AuthActions.setNotAuthenticated({ isAuthenticated })
          )
        )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logOut),
        tap(() => {
          this.authService.logout();
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
