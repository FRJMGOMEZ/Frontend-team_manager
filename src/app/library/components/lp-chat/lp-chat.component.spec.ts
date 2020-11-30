import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpChatComponent } from './lp-chat.component';

describe('LpChatComponent', () => {
  let component: LpChatComponent;
  let fixture: ComponentFixture<LpChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
