import { Component, OnInit } from '@angular/core';
import Hero from '../model/hero';
import HEROES from '../data/mock-heroes';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title:string = 'Tour of Heroes';
  heroes:Hero[] = HEROES;
  selectedHero: Hero;
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit() {
  }

}
