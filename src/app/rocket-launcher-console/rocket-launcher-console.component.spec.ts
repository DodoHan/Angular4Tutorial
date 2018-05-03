import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketLauncherConsoleComponent } from './rocket-launcher-console.component';

describe('RocketLauncherConsoleComponent', () => {
  let component: RocketLauncherConsoleComponent;
  let fixture: ComponentFixture<RocketLauncherConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketLauncherConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketLauncherConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
