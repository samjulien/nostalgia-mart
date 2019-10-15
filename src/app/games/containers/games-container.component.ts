import { Component, OnInit } from '@angular/core';
import { PLATFORMS } from '../models/platforms.dictionary';
import { Store, select } from '@ngrx/store';
import * as fromGames from '@nostalgia-mart/games/reducers';
import { GamesListActions } from '@nostalgia-mart/games/actions';
import { Observable, of } from 'rxjs';
import { Game } from '../models/game';

@Component({
  selector: 'nm-games-container',
  template: `
    <mat-button-toggle-group #group="matButtonToggleGroup">
      <mat-button-toggle
        [checked]="(platform$ | async) === NES"
        value="left"
        aria-label="NES"
        (click)="togglePlatform(NES)"
      >
        NES
      </mat-button-toggle>
      <mat-button-toggle
        [checked]="(platform$ | async) === SNES"
        value="center"
        aria-label="SNES"
        (click)="togglePlatform(SNES)"
      >
        SNES
      </mat-button-toggle>
    </mat-button-toggle-group>
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
export class GamesContainerComponent implements OnInit {
  NES = PLATFORMS.NES;
  SNES = PLATFORMS.SNES;
  loading$: Observable<boolean>;
  games$: Observable<Game[]>;
  platform$: Observable<string>;

  constructor(private store: Store<fromGames.State>) {
    this.games$ = this.store.pipe(select(fromGames.selectGamesListGames));
    this.platform$ = this.store.pipe(select(fromGames.selectGamesListPlatform));
    this.loading$ = this.store.pipe(select(fromGames.selectGamesListLoading));
  }

  ngOnInit() {
    this.togglePlatform(this.SNES);
  }

  togglePlatform(system: string) {
    this.store.dispatch(GamesListActions.setPlatform({ platform: system }));
  }
}
