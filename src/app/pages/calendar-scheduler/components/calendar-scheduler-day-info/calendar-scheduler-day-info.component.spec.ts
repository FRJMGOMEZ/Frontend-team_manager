import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSchedulerDayInfoComponent } from './calendar-scheduler-day-info.component';

describe('CalendarSchedulerDayInfoComponent', () => {
  let component: CalendarSchedulerDayInfoComponent;
  let fixture: ComponentFixture<CalendarSchedulerDayInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarSchedulerDayInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSchedulerDayInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
