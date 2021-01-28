import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsInfoComponent } from './notifications-info.component';

describe('NotificationsInfoComponent', () => {
  let component: NotificationsInfoComponent;
  let fixture: ComponentFixture<NotificationsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
