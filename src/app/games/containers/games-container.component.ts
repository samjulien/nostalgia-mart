import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromGames from '@nostalgia-mart/games/reducers';
import { Game } from '@nostalgia-mart/games/models';

@Component({
  selector: 'nm-games-container',
  template: `
    <ng-container *ngIf="loading$ | async">
      <div class="break"></div>
      <mat-card>
        <mat-card-title>Loading...</mat-card-title>
      </mat-card>
    </ng-container>
    <nm-games-list [games]="games$ | async"></nm-games-list>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      .break {
        flex-basis: 100%;
        height: 0;
      }

      mat-card {
        width: 500px;
        margin: 15px;
        text-align: center;
      }
    `,
  ],
})
export class GamesContainerComponent {
  loading$: Observable<boolean>;
  games$: Observable<Game[]>;

  constructor(private store: Store<fromGames.State>) {
    this.games$ = this.store.pipe(select(fromGames.selectGamesListGames));
    this.loading$ = this.store.pipe(select(fromGames.selectGamesListLoading));
  }
}
