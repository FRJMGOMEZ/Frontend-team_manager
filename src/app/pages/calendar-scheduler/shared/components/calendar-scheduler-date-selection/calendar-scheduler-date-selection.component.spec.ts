import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSchedulerDateSelectionComponent } from './calendar-scheduler-date-selection.component';

describe('CalendarSchedulerDateSelectionComponent', () => {
  let component: CalendarSchedulerDateSelectionComponent;
  let fixture: ComponentFixture<CalendarSchedulerDateSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarSchedulerDateSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSchedulerDateSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
