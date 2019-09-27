import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nm-game-card',
  template: `
    <mat-card>
      <mat-card-header>
        <div mat-card-avatar [ngStyle]="imageStyles"></div>
        <mat-card-title>
          <a [href]="game.url" target="blank">{{ game.name }}</a>
        </mat-card-title>
        <mat-card-subtitle>
          Rating: {{ game.rating | number: '1.0-1' }}
        </mat-card-subtitle>
      </mat-card-header>
      <img
        mat-card-image
        [src]="
          'https://images.igdb.com/igdb/image/upload/t_original/' +
          game.screenshot.image_id +
          '.jpg'
        "
      />
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
  @Input() game;
  imageStyles = {};
  constructor() {}

  ngOnInit() {
    this.game.excerpt = this.game.summary
      ? this.game.summary.substring(0, 200) + '...'
      : 'No summary available.';
    this.imageStyles = {
      'background-image':
        'url(' +
        `https://images.igdb.com/igdb/image/upload/t_original/${this.game.cover.image_id}.jpg` +
        ')',
      'background-size': 'cover',
    };
    this.game.screenshot = this.game.screenshots.filter(pic => {
      if (pic.height / pic.width <= 1) {
        return pic;
      }
    })[0];
  }
}
