import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpBottomSheetInfoComponent } from './lp-bottom-sheet-info.component';

describe('LpBottomSheetInfoComponent', () => {
  let component: LpBottomSheetInfoComponent;
  let fixture: ComponentFixture<LpBottomSheetInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpBottomSheetInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpBottomSheetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
