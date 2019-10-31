import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  bckgrd_default: string = "url('/assets/bckgrd-1.svg')";
  bckgrd_flash : string = "url('/assets/bckgrd-2.png')";
  bckgrd: string = "url('/assets/bckgrd-1.svg')";
  // sound: string = "";
  // soundStorm = new Audio("url('/assets/tonnere.mp3')");
  audio = new Audio ('/assets/tonnerre.wav');
  audioZombie = new Audio ('/assets/monstre_03.mp3');


  constructor() { 

    setInterval(() => {
      this.bckgrd = this.bckgrd_flash;
      setTimeout(() => {
        this.bckgrd = this.bckgrd_default;
        setTimeout(() => {
          this.bckgrd = this.bckgrd_flash;
          setTimeout(() => {
            this.bckgrd = this.bckgrd_default;
          }, 100);
          this.bckgrd = this.bckgrd_flash;
        }, 100);
        this.bckgrd = this.bckgrd_default;
      }, 200);
      this.audio.play();
      this.bckgrd = this.bckgrd_flash;
      setTimeout(() => {
        this.audioZombie.play();
      }, 3000);
    }, 30000);
  };

  ngOnInit() {};

}
