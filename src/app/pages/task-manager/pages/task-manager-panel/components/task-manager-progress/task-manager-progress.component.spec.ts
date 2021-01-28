import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerProgressComponent } from './task-manager-progress.component';

describe('TaskManagerProgressComponent', () => {
  let component: TaskManagerProgressComponent;
  let fixture: ComponentFixture<TaskManagerProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskManagerProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
