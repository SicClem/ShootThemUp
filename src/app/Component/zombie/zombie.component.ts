import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zombie',
  templateUrl: './zombie.component.html',
  styleUrls: ['./zombie.component.scss']
})
export class ZombieComponent implements OnInit {
  isArrived : boolean = false;
  position : number = 0

  constructor() { }

  ngOnInit() {
    this.interval()
  }

 interval() {
   setInterval(()=> {
    this.stopZombie();
    if (this.isArrived === false){
      this.movePosition();
      console.log(this.position);
      }
    }, 20);
  }

  stopZombie() {
    if (this.position === window.innerWidth - 200) {
      this.isArrived = true;
    }
  }

  movePosition () {
    this.position += 10;
  }

}
