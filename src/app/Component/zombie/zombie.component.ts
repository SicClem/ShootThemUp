import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Zombie } from 'src/app/Shared/zombie';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { GameService } from 'src/app/Shared/game.service';

@Component({
  selector: 'app-zombie',
  templateUrl: './zombie.component.html',
  styleUrls: ['./zombie.component.scss']
})
export class ZombieComponent implements OnInit {
  isArrived : boolean = false;
  position : number = 0;
  
  arrayProfondeurOrdonné : number[] = [
    0,
    -300,
    -500,
    -1500,
    -2000    
  ]

  profondeurRandom : number

  profondeur : SafeStyle
  indexProf : number
  isAlive : boolean = true
 

  @Input() inputZombie : Zombie;

  constructor(private sanitizer: DomSanitizer,
              private vcRef : ViewContainerRef,
              private gameservice : GameService ) { }

  ngOnInit() {
    this.interval();
    this.randomVarProf();
  }

 interval() {
   setInterval(()=> {
    this.stopZombie();
    if (this.isArrived === false){
      this.movePosition();
      }
    }, 20);
  }

  stopZombie() {
    if (this.position > 1300) {
      this.isArrived = true;
    }
  }

  movePosition () {
    this.position += 1 * this.inputZombie.level;
  }

  randomVarProf(){
    this.profondeurRandom = this.arrayProfondeurOrdonné[Math.floor(Math.random() * (4 - 0)) + 0];
    switch (this.profondeurRandom) {
      case this.arrayProfondeurOrdonné[0] : this.indexProf = 4;
        break;
      case this.arrayProfondeurOrdonné[1] : this.indexProf = 3;
        break;
      case this.arrayProfondeurOrdonné[2] : this.indexProf = 2;
        break;
      case this.arrayProfondeurOrdonné[3] : this.indexProf = 1;
        break;
      case this.arrayProfondeurOrdonné[4] : this.indexProf = 0;
        break;
    }
    this.profondeur = this.sanitizer.bypassSecurityTrustStyle("perspective(1000px) translateZ("+this.profondeurRandom+"px)");
  }
  shot(inputZombie){
    this.gameservice.singleZombie.delete(inputZombie)

  }
}


