import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisContactComponent } from './crisis-contact.component';

describe('CrisisContactComponent', () => {
  let component: CrisisContactComponent;
  let fixture: ComponentFixture<CrisisContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
