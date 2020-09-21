import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSchedulerDayComponent } from './calendar-scheduler-day.component';

describe('CalendarSchedulerDayComponent', () => {
  let component: CalendarSchedulerDayComponent;
  let fixture: ComponentFixture<CalendarSchedulerDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarSchedulerDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSchedulerDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
