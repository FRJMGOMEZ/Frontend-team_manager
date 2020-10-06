import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSchedulerWeekComponent } from './calendar-scheduler-week.component';

describe('CalendarSchedulerWeekComponent', () => {
  let component: CalendarSchedulerWeekComponent;
  let fixture: ComponentFixture<CalendarSchedulerWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarSchedulerWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSchedulerWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
