import { Component, OnInit } from '@angular/core';
import { VideoGamesService } from '@nostalgia-mart/core/services';

@Component({
  selector: 'nm-games-container',
  template: `
    <mat-button-toggle-group #group="matButtonToggleGroup">
      <mat-button-toggle
        [checked]="platform === 'NES'"
        value="left"
        aria-label="NES"
        (click)="togglePlatform('NES')"
      >
        NES
      </mat-button-toggle>
      <mat-button-toggle
        [checked]="platform === 'SNES'"
        value="center"
        aria-label="SNES"
        (click)="togglePlatform('SNES')"
      >
        SNES
      </mat-button-toggle>
    </mat-button-toggle-group>
    <nm-games-list [games]="games$ | async"></nm-games-list>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `,
  ],
})
export class GamesContainerComponent implements OnInit {
  games$: any;
  platform = 'SNES';

  constructor(private videoGamesService: VideoGamesService) {}

  ngOnInit() {
    this.getGames();
  }

  togglePlatform(system: string) {
    this.platform = system;
    this.getGames();
  }

  getGames() {
    if (this.platform === 'NES') {
      this.games$ = this.videoGamesService.getNesGames();
    } else if (this.platform === 'SNES') {
      this.games$ = this.videoGamesService.getSnesGames();
    }
  }
}
