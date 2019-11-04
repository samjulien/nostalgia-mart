import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '@nostalgia-mart/auth/reducers';
import { AuthActions } from '@nostalgia-mart/auth/actions';

@Component({
  selector: 'nm-root',
  template: `
    <h1><a href="/">Nostalgia Mart</a></h1>
    <nm-nav-bar></nm-nav-bar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      h1 {
        font-family: 'Press Start 2P', cursive;
        text-align: center;
      }

      a {
        text-decoration: none;
        color: white;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  title = 'Nostalgia Mart';

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {
    this.store.dispatch(AuthActions.checkAuth());
    this.store.dispatch(AuthActions.handleRedirect());
  }
}
