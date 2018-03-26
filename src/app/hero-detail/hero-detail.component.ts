import { Component, OnInit, Input } from '@angular/core';
import Hero from '../model/hero';
import { ActivatedRoute } from '@angular/router';
import HeroService from '../service/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero:Hero;
  activatedRoute:ActivatedRoute;
  heroService:HeroService;
  location:Location;
  constructor(heroService: HeroService,location: Location, activatedRoute:ActivatedRoute) { 
    this.heroService= heroService;
    this.location = location;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit() {
    const id =  +this.activatedRoute.snapshot.paramMap.get('id');
    this.heroService.getHero$(id)
    .subscribe(hero => {this.hero = hero; console.log(hero)});
  }

  goBack(){
    this.location.back();
  }

}
