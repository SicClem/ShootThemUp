import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/Shared/game.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
  constructor(private gameService : GameService) { }

  ngOnInit() {
  } 

}
