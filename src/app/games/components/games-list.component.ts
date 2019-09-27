import { Component, OnInit, Input } from '@angular/core';
import { VideoGamesService } from '@nostalgia-mart/core/services';

@Component({
  selector: 'nm-games-list',
  template: `
    <nm-game-card *ngFor="let game of games" [game]="game"></nm-game-card>
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
export class GamesListComponent implements OnInit {
  @Input() games;
  constructor(private videoGamesService: VideoGamesService) {}

  ngOnInit() {}
}
