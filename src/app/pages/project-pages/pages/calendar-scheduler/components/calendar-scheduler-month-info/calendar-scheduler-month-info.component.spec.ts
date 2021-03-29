import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSchedulerMonthInfoComponent } from './calendar-scheduler-month-info.component';

describe('CalendarSchedulerMonthInfoComponent', () => {
  let component: CalendarSchedulerMonthInfoComponent;
  let fixture: ComponentFixture<CalendarSchedulerMonthInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarSchedulerMonthInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSchedulerMonthInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
