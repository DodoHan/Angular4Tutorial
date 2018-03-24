import { Component, OnInit, Input } from '@angular/core';
import Hero from '../model/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  /* Shore: 这是模板语法， 从html到component的变量值!! */
  @Input() hero:Hero;
  constructor() { }

  ngOnInit() {
  }

}
