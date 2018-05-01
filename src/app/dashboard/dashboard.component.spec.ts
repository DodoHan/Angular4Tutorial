import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
//RouterModule needed by rounterLink
import {RouterModule} from '@angular/router';
import HeroService from '../service/hero.service';
import Hero from '../model/hero';
import { of } from 'rxjs/observable/of';
//shore: index.ts is used for testing
import { RouterLinkDirectiveStub } from '../../testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  const heroServiceObjSpy=jasmine.createSpyObj('HeroService', ['getHeroes$']);
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
  heroServiceObjSpy.getHeroes$.and.returnValue(of(HEROES));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //Shore: why RouterModule doesn't work!! Does RouteLink try to bind with it's link value?
      //imports: [RouterModule],
      declarations: [ DashboardComponent , RouterLinkDirectiveStub],
      providers: [
        { provide: HeroService, useValue: heroServiceObjSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    console.log(fixture);
    component = fixture.componentInstance;
    console.log(component);
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('in dashboard.component.spec!');
    /*
    fixture = TestBed.createComponent(DashboardComponent);
    console.log(fixture);
    console.log(component);
    */
    expect(component).toBeTruthy();
  });
});
