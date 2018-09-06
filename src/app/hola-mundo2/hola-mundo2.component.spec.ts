import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaMundo2Component } from './hola-mundo2.component';

describe('HolaMundo2Component', () => {
  let component: HolaMundo2Component;
  let fixture: ComponentFixture<HolaMundo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaMundo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaMundo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
