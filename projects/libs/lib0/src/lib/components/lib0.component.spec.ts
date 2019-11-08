import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Component } from './lib0.component';

describe('BlankLibComponent', () => {
  let component: Lib0Component;
  let fixture: ComponentFixture<Lib0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
