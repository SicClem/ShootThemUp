import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Zombie } from './zombie';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  singleZombie: Set<Zombie> = new Set<Zombie>();
  zombies: Zombie[] = [];
  level : number = 1;
  zombieIntervalId: any;
  isAlive : boolean = true;

  private baseUrl = 'https://hackathon-wild-hackoween.herokuapp.com/monsters';

  constructor(private http: HttpClient) {
    this.getZombies().subscribe(response => {
      this.zombies.push(...response.monsters);
    });

    this.zombieInterval();

    // Interval pour incrémenter le niveau toutes les 30 secondes
    setInterval(() => {
      this.level += 1;
      this.setLevel(this.level);
    }, 30000);
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
    console.log(this.singleZombie)
  }

  setLevel(level :number){
    this.level = level;
    clearInterval(this.zombieIntervalId);
    this.zombieInterval();
  }

  shot(){
    this.isAlive = false

  }
}
