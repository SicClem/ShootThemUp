import { Component, OnInit } from '@angular/core';
import { Zombie } from 'src/app/Shared/zombie';
import { GameService } from 'src/app/Shared/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public zombies : Zombie [];

  constructor(private zombService: GameService ){
  }

  public ngOnInit():void {
    this.zombService.getZombies().subscribe(
        (response: any) => {
            this.zombies  =  response.monsters;
        }
    );
}
}