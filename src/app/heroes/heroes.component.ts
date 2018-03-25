import { Component, OnInit } from '@angular/core';
import Hero from '../model/hero';
import HeroService from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title:string = 'Tour of Heroes';
  heroService:HeroService;
  heroes:Hero[];
  selectedHero: Hero;
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  /**
   * 让构造函数保持简单，只做初始化操作，比如把构造函数的参数赋值给属性。 构造函数不应该做任何事。 它肯定不能调用某个函数来向远端服务（比如真实的数据服务）发起 HTTP 请求。
   */
  constructor(heroService:HeroService) {
    this.heroService=heroService;
   }

  ngOnInit() {
    this.heroService.getHeroes$().subscribe(heroes=>this.heroes=heroes);
  }

}
