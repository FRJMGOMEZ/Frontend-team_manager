import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpLocalStorageComponent } from './lp-local-storage.component';

describe('LpLocalStorageComponent', () => {
  let component: LpLocalStorageComponent;
  let fixture: ComponentFixture<LpLocalStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpLocalStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpLocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
