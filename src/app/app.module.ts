import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamePageComponent } from './Pages/game-page/game-page.component';
import { ScoreBarComponent } from './Component/score-bar/score-bar.component';
import { ScoreComponent } from './Component/score/score.component';
import { LevelComponent } from './Component/level/level.component';
import { BoardComponent } from './Component/board/board.component';
import { ZombieComponent } from './Component/zombie/zombie.component';
import { InnocentComponent } from './Component/innocent/innocent.component';
import { HttpClientModule } from  '@angular/common/http'

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
