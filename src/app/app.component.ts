import { Component } from '@angular/core';

@Component({
  selector: 'nm-root',
  template: `
    <h1>Nostalgia Mart</h1>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      h1 {
        font-family: 'Press Start 2P', cursive;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Nostalgia Mart';
}
