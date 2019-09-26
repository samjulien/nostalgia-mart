import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from '@nostalgia-mart/games/components';
import { GamesRoutingModule } from './games-routing.module';
import { GamesListComponent } from './containers/games-list.component';

@NgModule({
  declarations: [GameCardComponent, GamesListComponent],
  imports: [CommonModule, GamesRoutingModule],
})
export class GamesModule {}
