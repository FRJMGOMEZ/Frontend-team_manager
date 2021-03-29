import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerFilesComponent } from './task-manager-files.component';

describe('TaskManagerFilesComponent', () => {
  let component: TaskManagerFilesComponent;
  let fixture: ComponentFixture<TaskManagerFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskManagerFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
