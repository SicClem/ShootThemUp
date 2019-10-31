import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/Shared/game.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {

  end: boolean = true;

  constructor(private gameservice : GameService ) { }

  ngOnInit() {
  }

  replay() {
    this.gameservice.replay();
  }
}
