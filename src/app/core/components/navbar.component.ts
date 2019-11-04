import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '@nostalgia-mart/auth/reducers';
import { AuthActions } from '@nostalgia-mart/auth/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'nm-nav-bar',
  template: `
    <ng-container *ngIf="isAuthenticated$ | async; else notLoggedIn">
      <p *ngIf="user$ | async">
        Welcome, {{ (user$ | async).name }}!
        <a mat-button href="#" (click)="logout()">
          Log Out
        </a>
      </p>
    </ng-container>
    <ng-template #notLoggedIn>
      <a mat-button (click)="login()">
        Log In
      </a>
    </ng-template>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class NavBarComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  user$: Observable<any>;

  constructor(private store: Store<fromAuth.State>) {
    this.isAuthenticated$ = this.store.pipe(
      select(fromAuth.selectIsAuthenticated)
    );
    this.user$ = this.store.pipe(select(fromAuth.selectUser));
  }

  ngOnInit() {}

  login() {
    this.store.dispatch(AuthActions.logIn());
  }

  logout() {
    this.store.dispatch(AuthActions.logOut());
  }
}
