import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../models/game';

@Component({
  selector: 'nm-game-card',
  template: `
    <mat-card>
      <mat-card-header>
        <div mat-card-avatar [ngStyle]="imageStyles"></div>
        <mat-card-title>
          <a [routerLink]="['/', game.id]">{{ game.name }}</a>
        </mat-card-title>
        <mat-card-subtitle>
          Rating: {{ game.rating | number: '1.0-1' }}
        </mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image [src]="game.screenshotUrl" />
      <mat-card-content>
        <p>{{ game.excerpt }}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      :host {
        display: flex;
      }

      :host a {
        display: flex;
      }

      mat-card {
        width: 300px;
        margin: 15px;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
      }

      @media only screen and (max-width: 768px) {
        mat-card {
          margin: 15px 0 !important;
        }
      }
      mat-card:hover {
        box-shadow: 3px 3px 16px -2px rgba(0, 0, 0, 0.5);
      }
      mat-card-title {
        margin-right: 10px;
      }
      mat-card-title-group {
        margin: 0;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      mat-card-content {
        margin-top: 15px;
        margin: 15px 0 0;
      }
      span {
        display: inline-block;
        font-size: 13px;
      }
      mat-card-footer {
        padding: 0 25px 25px;
      }
    `,
  ],
})
export class GameCardComponent implements OnInit {
  @Input() game: Game;
  imageStyles = {};
  constructor() {}

  ngOnInit() {
    this.imageStyles = {
      'background-image': 'url(' + this.game.coverUrl + ')',
      'background-size': 'cover',
    };
  }
}
