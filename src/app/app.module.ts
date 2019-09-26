import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesModule } from '@nostalgia-mart/games';
import { CoreModule } from '@nostalgia-mart/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GamesModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
