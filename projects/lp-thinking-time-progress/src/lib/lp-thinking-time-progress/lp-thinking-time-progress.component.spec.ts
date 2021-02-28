/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LpThinkingTimeProgressComponent } from './lp-thinking-time-progress.component';

describe('LpThinkingTimeProgressComponent', () => {
  let component: LpThinkingTimeProgressComponent;
  let fixture: ComponentFixture<LpThinkingTimeProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpThinkingTimeProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpThinkingTimeProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
