import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpChatToolsComponent } from './lp-chat-tools.component';

describe('LpChatToolsComponent', () => {
  let component: LpChatToolsComponent;
  let fixture: ComponentFixture<LpChatToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpChatToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpChatToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
