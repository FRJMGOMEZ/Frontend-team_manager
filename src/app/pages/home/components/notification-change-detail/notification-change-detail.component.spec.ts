import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationChangeDetailComponent } from './notification-change-detail.component';

describe('NotificationChangeDetailComponent', () => {
  let component: NotificationChangeDetailComponent;
  let fixture: ComponentFixture<NotificationChangeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationChangeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationChangeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
