import { Component, OnInit } from '@angular/core';
import { player } from '../models/player.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  myPlayer = player;
  myGrid = [];
  constructor() {
    for(let i = 0; i < 12; i++) {
    this.myGrid.push((new Array(12)).fill(false));
    };
    this.produceApple();
    console.log("test");
  }
  produceApple(num = 20){
    for(let i = 0; i < num; i++) {
      let x = Math.floor(Math.random()*12);
      let y = Math.floor(Math.random()*12);
      this.myGrid[x][y] = true;
    }
  };
  renderBox(x, y) {
    if(this.myGrid[x][y] === true &&
    this.myPlayer.x === x &&
    this.myPlayer.y === y) {  //Player and apple
      this.myGrid[x][y] = false;
      this.myPlayer.score += 1;
      console.log(this.myPlayer.score);
      return `col-md-1 square player`;
    }
    else if (this.myPlayer.x === x && this.myPlayer.y === y){                   //Player
      return `col-md-1 square player`;
    }
    else if (this.myGrid[x][y] === true){                   //Apple
      return `col-md-1 square apple`;
    }
    else {                            //None
      return `col-md-1 square`;
    }
  }
  onKeyDown(event) {
    console.log("Pressed a key");
    const keyCode = event.keyCode;
    switch (keyCode) {
      case 68: //d
        this.myPlayer.y+=this.myPlayer.speed;
        break;
      case 83: //s
        this.myPlayer.x+=this.myPlayer.speed;
        break;
      case 65: //a
        this.myPlayer.y-=this.myPlayer.speed;
        break;
      case 87: //w
        this.myPlayer.x-=this.myPlayer.speed;
        break;
    }
  }
}
