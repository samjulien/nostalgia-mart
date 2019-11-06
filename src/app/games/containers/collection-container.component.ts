import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nm-collection-container',
  template: `
    <nm-games-container></nm-games-container>
  `,
})
export class CollectionContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
