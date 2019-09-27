import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from '@nostalgia-mart/games/components';
import { GamesRoutingModule } from '@nostalgia-mart/games/games-routing.module';
import { GamesListComponent } from '@nostalgia-mart/games/containers';
import { MaterialModule } from '@nostalgia-mart/material';

@NgModule({
  declarations: [GameCardComponent, GamesListComponent],
  imports: [CommonModule, GamesRoutingModule, MaterialModule],
})
export class GamesModule {}
