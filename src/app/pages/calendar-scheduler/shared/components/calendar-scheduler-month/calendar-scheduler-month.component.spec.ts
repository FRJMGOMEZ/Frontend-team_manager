import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSchedulerMonthComponent } from './calendar-scheduler-month.component';

describe('CalendarSchedulerMonthComponent', () => {
  let component: CalendarSchedulerMonthComponent;
  let fixture: ComponentFixture<CalendarSchedulerMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarSchedulerMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSchedulerMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
