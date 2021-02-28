import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsFilterComponent } from './notifications-filter.component';

describe('NotificationsFilterComponent', () => {
  let component: NotificationsFilterComponent;
  let fixture: ComponentFixture<NotificationsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
