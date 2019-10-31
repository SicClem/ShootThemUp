import { Component, OnInit, Input } from '@angular/core';
import { Zombie } from 'src/app/Shared/zombie';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { GameService } from 'src/app/Shared/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zombie',
  templateUrl: './zombie.component.html',
  styleUrls: ['./zombie.component.scss']
})
export class ZombieComponent implements OnInit {
  isArrived : boolean = false;
  isHitting : boolean = false;
  zombieClass : string;
  shotAudio = new Audio ('/assets/shotGunSound.wav')
  screamAudio = new Audio ('/assets/SF-femme.mp3')

  arrayProfondeurOrdonné : number[] = [
    0,
    -300,
    -500,
    -1500,
    -2000    
  ];

  profondeurRandom : number;
  profondeur : SafeStyle;
  indexProf : number;
 

  @Input() inputZombie : Zombie;

  constructor(private sanitizer: DomSanitizer,
              private gameservice : GameService,
              private router : Router ) { }

  ngOnInit() {
    this.randomVarProf();
    this.zombieRandom();
  }

  randomVarProf() {
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
    };
    this.profondeur = this.sanitizer.bypassSecurityTrustStyle("perspective(1000px) translateZ("+this.profondeurRandom+"px)");
  };

  shot(){
    this.gameservice.singleZombie.delete(this.inputZombie);
    this.gameservice.score += this.inputZombie.defense * this.gameservice.level;
    this.isHitting = false;
    this.isArrived = false;
    this.shotAudio.play();
  };

  zombieRandom() {
    const x = Math.floor(Math.random() * 5) + 1;
    this.zombieClass = `monstre${x}`;
  };

  checkIfArrived () {
    setInterval(
      ()=> {this.hitInnocent()}, 1000)
  };


  hitInnocent () {
    if (this.isHitting === true){

      this.screamAudio.play();
    //   setInterval(
    //     () => {this.gameservice.lifeLeft -= inputZombie.attack}
    //   ,1000);
    // }
    }
  }
}
