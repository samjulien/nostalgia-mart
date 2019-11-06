import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ViewGameComponent,
  GamesHomeComponent,
  CollectionContainerComponent,
} from '@nostalgia-mart/games/containers';

export const routes: Routes = [
  {
    path: '',
    component: GamesHomeComponent,
    data: { title: 'Games' },
  },
  {
    path: ':id',
    component: ViewGameComponent,
    data: { title: 'Game' },
  },
  {
    path: 'collection',
    component: CollectionContainerComponent,
    data: { title: 'Games Collection' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
