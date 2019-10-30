import { Component, OnInit, Input } from '@angular/core';
import { Zombie } from 'src/app/Shared/zombie';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-zombie',
  templateUrl: './zombie.component.html',
  styleUrls: ['./zombie.component.scss']
})
export class ZombieComponent implements OnInit {
  isArrived : boolean = false;
  position : number = 0;
  
  varProf : number;
  profondeur : SafeStyle

 

  @Input() inputZombie : Zombie;

  constructor(private sanitizer: DomSanitizer) { }

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
    const randomIndex = Math.floor(Math.random() * (-1000))
    this.varProf = randomIndex
    this.profondeur = this.sanitizer.bypassSecurityTrustStyle("perspective(1000px) translateZ("+this.varProf+"px)");
  }
}
