import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'count-down-display',
  templateUrl: './count-down-display.component.html',
  styleUrls: ['./count-down-display.component.css']
})
export class CountDownDisplayComponent implements OnInit {
  @Input() totalSeconds:number;
  @Input() selfStart:boolean;
  @Output() onDown2Zero = new EventEmitter<boolean>();
  
  secondsLeft:number;
  intervalId:number;
  constructor() { }

  ngOnInit() {
    this.secondsLeft=this.totalSeconds;
    if(this.selfStart === true){
      this.countDown();
    }
  }

  start(){
    this.countDown();
  }

  stop(){
    window.clearInterval(this.intervalId);
  }

  private countDown()
  {
    if(this.secondsLeft>0)
    {
    this.intervalId = window.setInterval(() => {
      this.secondsLeft--;
      if( this.secondsLeft === 0){
        this.stop();
        this.onDown2Zero.emit(true);
      }else{

      }
    }, 1000);
  }
  }

}
