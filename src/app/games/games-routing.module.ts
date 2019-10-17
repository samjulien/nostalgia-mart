import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  GamesContainerComponent,
  ViewGameComponent,
} from '@nostalgia-mart/games/containers';

export const routes: Routes = [
  {
    path: '',
    component: GamesContainerComponent,
    data: { title: 'Games' },
  },
  {
    path: ':id',
    component: ViewGameComponent,
    data: { title: 'Game' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
