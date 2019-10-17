import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import * as fromGames from '@nostalgia-mart/games/reducers/';
import { ViewGamePageActions } from '@nostalgia-mart/games/actions';

@Component({
  selector: 'nm-view-game',
  template: `
    <nm-selected-game></nm-selected-game>
  `,
})
export class ViewGameComponent implements OnDestroy {
  actionsSubscription: Subscription;

  constructor(store: Store<fromGames.State>, route: ActivatedRoute) {
    this.actionsSubscription = route.params
      .pipe(map(params => ViewGamePageActions.selectGame({ id: params.id })))
      .subscribe(action => store.dispatch(action));
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}
