import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamePageComponent } from './game-page/game-page.component';
import { ScoreBarComponent } from './score-bar/score-bar.component';
import { ScoreComponent } from './score/score.component';
import { LevelComponent } from './level/level.component';
import { BoardComponent } from './board/board.component';
import { ZombieComponent } from './zombie/zombie.component';
import { InnocentComponent } from './innocent/innocent.component';

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    ScoreBarComponent,
    ScoreComponent,
    LevelComponent,
    BoardComponent,
    ZombieComponent,
    InnocentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
