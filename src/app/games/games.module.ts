import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GameCardComponent,
  GamesListComponent,
} from '@nostalgia-mart/games/components';
import { GamesContainerComponent } from '@nostalgia-mart/games/containers';
import { GamesRoutingModule } from '@nostalgia-mart/games/games-routing.module';
import { MaterialModule } from '@nostalgia-mart/material';
import { StoreModule } from '@ngrx/store';
import * as fromGames from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { GamesEffects } from './effects/games.effects';

@NgModule({
  declarations: [
    GameCardComponent,
    GamesListComponent,
    GamesContainerComponent,
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MaterialModule,
    StoreModule.forFeature(fromGames.gamesFeatureKey, fromGames.reducers),
    EffectsModule.forFeature([GamesEffects]),
  ],
})
export class GamesModule {}
