import { Component, OnInit } from '@angular/core';
import { Zombie } from 'src/app/Shared/zombie';
import { GameService } from 'src/app/Shared/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public singleZombie: Zombie[] = [];
  public zombies: Zombie [];

  constructor(private zombService: GameService ) {}

  public ngOnInit(): void {
    this.zombService.getZombies().subscribe(
        (response: any) => {
            this.zombies = response.monsters;
        }
    );

    setInterval(() => {
      this.addSingleZombie();
    }, 1000);
  }

  /**
   * Add a random zombie from the array zombies.
   */
  addSingleZombie() {
    const randomIndex = Math.floor(Math.random() * this.zombies.length);
    const randomZombie = this.zombies[randomIndex]
    this.singleZombie.push(randomZombie);
  }
}