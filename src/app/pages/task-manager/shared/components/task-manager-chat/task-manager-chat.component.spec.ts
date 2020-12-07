import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerChatComponent } from './task-manager-chat.component';

describe('TaskManagerChatComponent', () => {
  let component: TaskManagerChatComponent;
  let fixture: ComponentFixture<TaskManagerChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskManagerChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
