import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import Hero from '../model/hero';
import { of } from 'rxjs/observable/of';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Injectable()
export default class HeroService {

  constructor() { }

  /*
  getObservableHeroes():Observable<Hero[]>{
    return of(HEROES);
  }
  */

  getHeroes$():Observable<Hero[]>{
    return of(HEROES);
  }
}
