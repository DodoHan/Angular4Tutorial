/**
 * why doesn't report the error that routerLink is not known.
 */
import { TestBed, async,  ComponentFixture,  } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from  '@angular/core';

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent {}

/**
 * We don't simulate routerLink here.
 */

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterOutletStubComponent
      ]
    }).compileComponents().
    then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });;
  }));
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toEqual('');
    fixture.detectChanges();
    //expect(compiled.querySelector('h1').textContent).toContain('set in constructor');
    
    expect(compiled.querySelector('h1').textContent).toContain('set in ngOnInit');
  });
});
