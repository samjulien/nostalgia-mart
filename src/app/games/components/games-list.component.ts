import { Component, OnInit, Input } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}
}
