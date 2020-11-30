import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpChatUsersComponent } from './lp-chat-users.component';

describe('LpChatUsersComponent', () => {
  let component: LpChatUsersComponent;
  let fixture: ComponentFixture<LpChatUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpChatUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpChatUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
