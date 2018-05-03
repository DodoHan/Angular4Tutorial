import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import {CountDownDisplayComponent} from '../count-down-display/count-down-display.component';
@Component({
  selector: 'rocket-launcher-console',
  templateUrl: './rocket-launcher-console.component.html',
  styleUrls: ['./rocket-launcher-console.component.css']
})
export class RocketLauncherConsoleComponent implements OnInit {
  message:string;
  @ViewChild(CountDownDisplayComponent)
  private countDownDisplayComponent: CountDownDisplayComponent;

  constructor() { }

  ngOnInit() {
    this.message='Launch status';
  }

  onDown2ZeroInConsole(isDown2Zero:boolean){
    if(isDown2Zero){
      this.message='Rocket is ignited!';
    }
  }
  
  startInRocketLauncherConsole(){
    this.countDownDisplayComponent.start();
    this.message='Count down display is running.'
  }

  stopInRocketLauncherConsole(){
    this.countDownDisplayComponent.stop();
    this.message='Count down display stopped.'
  }

}
