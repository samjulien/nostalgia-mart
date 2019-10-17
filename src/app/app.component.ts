import { Component } from '@angular/core';

@Component({
  selector: 'nm-root',
  template: `
    <h1><a href="/">Nostalgia Mart</a></h1>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      h1 {
        font-family: 'Press Start 2P', cursive;
        text-align: center;
      }

      a {
        text-decoration: none;
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Nostalgia Mart';
}
