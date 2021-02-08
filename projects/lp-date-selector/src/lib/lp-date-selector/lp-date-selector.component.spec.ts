import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LpDateSelectorComponent } from './lp-date-selector.component';


describe('LpDateSelectorComponent', () => {
  let component: LpDateSelectorComponent;
  let fixture: ComponentFixture<LpDateSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpDateSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpDateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
