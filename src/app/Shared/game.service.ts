import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Zombie } from './zombie';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  singleZombie: Set<Zombie> = new Set<Zombie>();
  zombies: Zombie[] = [];
  level : number = 1;
  zombieIntervalId: any;
  isAlive : boolean = true;
  score : number = 0;

  private baseUrl = 'https://hackathon-wild-hackoween.herokuapp.com/monsters';

  constructor(private http: HttpClient, private router: Router) {
    this.getZombies().subscribe(response => {
      this.zombies.push(...response.monsters);
    });

    this.zombieInterval();

    // Interval pour incrémenter le niveau toutes les 30 secondes
    setInterval(() => {
      this.level += 1;
      this.setLevel(this.level);
    }, 30000);

    // Move interval
    setInterval(()=> {
      /*this.stopZombie();
      if (this.isArrived === false) {
        this.movePosition();
      }*/

      for(let zombie of this.singleZombie) {
        this.movePosition(zombie);
      }
      }, 20);
  }

  replay() {
    this.singleZombie.clear();
    this.router.navigate(['gamepage']);
  }

  movePosition(zombie: Zombie) {
    if (!zombie.position) {
      zombie.position = 0;
    }

    if (zombie.position > 1000) {
      this.router.navigate(['/end'])
    }
    zombie.position += 1 * zombie.level;
  }

  zombieInterval() {
    // Interval pour ajouter des zombies au fur et à mesure
    this.zombieIntervalId = setInterval(() => {
      this.addSingleZombie();
    }, 3000 / this.level );
  }

  getZombies(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

   /**
   * Add a random zombie from the array zombies.
   */
  addSingleZombie() {
    const randomIndex = Math.floor(Math.random() * this.zombies.length);
    const randomZombie = this.zombies[randomIndex];
    this.singleZombie.add(randomZombie);
  }
  
  setLevel(level :number){
    this.level = level;
    clearInterval(this.zombieIntervalId);
    this.zombieInterval();
  }


}
