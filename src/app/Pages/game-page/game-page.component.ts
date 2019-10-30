import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  storm: string;

  constructor() { 

  }

  flash(){
    setInterval(() => {
      this.storm === "none"}, 30000
    );
  }

  ngOnInit() {};
}
