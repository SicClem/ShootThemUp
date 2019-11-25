import { Component, OnInit } from '@angular/core';
import { Zombie } from 'src/app/Shared/zombie';
import { GameService } from 'src/app/Shared/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  singleZombie: Set<Zombie> = new Set<Zombie>();
  zombies: Zombie [];

  constructor(private zombService: GameService) {}

  ngOnInit(): void {
    this.zombies = this.zombService.zombies;
    this.singleZombie = this.zombService.singleZombie;
  }
  
}