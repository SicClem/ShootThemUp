import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/Shared/game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  constructor(private gameservice : GameService) { }

  ngOnInit() {
  }

}
