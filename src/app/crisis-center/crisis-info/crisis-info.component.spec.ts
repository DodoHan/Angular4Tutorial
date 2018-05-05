import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisInfoComponent } from './crisis-info.component';

describe('CrisisInfoComponent', () => {
  let component: CrisisInfoComponent;
  let fixture: ComponentFixture<CrisisInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
