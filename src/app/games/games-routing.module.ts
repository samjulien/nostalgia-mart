import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesContainerComponent } from '@nostalgia-mart/games/containers';

export const routes: Routes = [
  {
    path: '',
    component: GamesContainerComponent,
    data: { title: 'Games' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
