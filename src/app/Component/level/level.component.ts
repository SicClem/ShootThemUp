import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
  level: number = 1;

  constructor() { 
    setInterval(() => {
      this.level += 1}, 30000
    );
  }

  ngOnInit() {
  }

}
