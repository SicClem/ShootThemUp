import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/Shared/game.service';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent implements OnInit {

  constructor(private gameservice : GameService ) {}

  ngOnInit() {
  }

  lifeLeft : number;

  

}
