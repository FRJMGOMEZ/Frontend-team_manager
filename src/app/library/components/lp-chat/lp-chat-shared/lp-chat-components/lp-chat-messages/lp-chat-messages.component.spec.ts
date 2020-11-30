import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpChatMessagesComponent } from './lp-chat-messages.component';

describe('LpChatMessagesComponent', () => {
  let component: LpChatMessagesComponent;
  let fixture: ComponentFixture<LpChatMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpChatMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpChatMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
