import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '@nostalgia-mart/games/models';
import { Store, select } from '@ngrx/store';
import * as fromGames from '@nostalgia-mart/games/reducers';

@Component({
  selector: 'nm-selected-game',
  template: `
    <ng-container *ngIf="game$ | async">
      <nm-game-detail [game]="game$ | async"></nm-game-detail>
    </ng-container>
  `,
})
export class SelectedGameComponent implements OnInit {
  game$: Observable<Game>;
  constructor(private store: Store<fromGames.State>) {
    this.game$ = store.pipe(select(fromGames.selectGame)) as Observable<Game>;
  }

  ngOnInit() {}
}
