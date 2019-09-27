import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GameCardComponent,
  GamesListComponent,
} from '@nostalgia-mart/games/components';
import { GamesContainerComponent } from '@nostalgia-mart/games/containers';
import { GamesRoutingModule } from '@nostalgia-mart/games/games-routing.module';
import { MaterialModule } from '@nostalgia-mart/material';

@NgModule({
  declarations: [
    GameCardComponent,
    GamesListComponent,
    GamesContainerComponent,
  ],
  imports: [CommonModule, GamesRoutingModule, MaterialModule],
})
export class GamesModule {}
