import { Component, OnInit, Input } from '@angular/core';
 
@Component({
  /*
  */
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']

})
export class HelloWorldComponent implements OnInit {
    @Input() private name:string ;
  
  constructor(){
    this.name= 'Shore';
  }

  ngOnInit() {
  }
}