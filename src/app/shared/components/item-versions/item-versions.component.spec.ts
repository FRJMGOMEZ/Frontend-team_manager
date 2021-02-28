/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemVersionsComponent } from './item-versions.component';

describe('ItemVersionsComponent', () => {
  let component: ItemVersionsComponent;
  let fixture: ComponentFixture<ItemVersionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemVersionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
