import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerPanelComponent } from './task-manager-panel.component';

describe('TaskManagerPanelComponent', () => {
  let component: TaskManagerPanelComponent;
  let fixture: ComponentFixture<TaskManagerPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskManagerPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
