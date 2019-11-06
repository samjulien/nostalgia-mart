import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  GameCardComponent,
  GamesListComponent,
  GameDetailComponent,
} from '@nostalgia-mart/games/components';
import {
  GamesContainerComponent,
  GamesHomeComponent,
  ViewGameComponent,
  SelectedGameComponent,
  CollectionContainerComponent,
} from '@nostalgia-mart/games/containers';
import { GamesRoutingModule } from '@nostalgia-mart/games/games-routing.module';
import { MaterialModule } from '@nostalgia-mart/material';
import * as fromGames from '@nostalgia-mart/games/reducers';
import { GamesListEffects, GameEffects } from '@nostalgia-mart/games/effects';

@NgModule({
  declarations: [
    GameCardComponent,
    GamesListComponent,
    GamesContainerComponent,
    ViewGameComponent,
    SelectedGameComponent,
    GameDetailComponent,
    GamesHomeComponent,
    CollectionContainerComponent,
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MaterialModule,
    StoreModule.forFeature(fromGames.gamesFeatureKey, fromGames.reducers),
    EffectsModule.forFeature([GamesListEffects, GameEffects]),
  ],
})
export class GamesModule {}
