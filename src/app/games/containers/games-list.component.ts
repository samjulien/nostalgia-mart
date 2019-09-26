import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nm-games-list',
  template: `
    <h2>Game List</h2>
    <nm-game-card></nm-game-card>
    <nm-game-card></nm-game-card>
    <nm-game-card></nm-game-card>
  `,
  styles: [],
})
export class GamesListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
