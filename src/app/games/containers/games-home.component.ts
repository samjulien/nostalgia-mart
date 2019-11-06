import { Component, OnInit } from '@angular/core';
import { PLATFORMS } from '@nostalgia-mart/games/models';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromGames from '@nostalgia-mart/games/reducers';
import { GamesListActions } from '@nostalgia-mart/games/actions';

@Component({
  selector: 'nm-games-home',
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
    <div class="break"></div>
    <nm-games-container></nm-games-container>
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
export class GamesHomeComponent implements OnInit {
  NES = PLATFORMS.NES;
  SNES = PLATFORMS.SNES;
  platform$: Observable<string>;

  constructor(private store: Store<fromGames.State>) {
    this.platform$ = this.store.pipe(select(fromGames.selectGamesListPlatform));
  }

  ngOnInit() {
    this.togglePlatform(this.SNES);
  }

  togglePlatform(system: string) {
    this.store.dispatch(GamesListActions.setPlatform({ platform: system }));
  }
}
