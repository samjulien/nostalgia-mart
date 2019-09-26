import { Component } from '@angular/core';

@Component({
  selector: 'nm-root',
  template: `
    <h1>Nostalgia Mart</h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Nostalgia Mart';
}
