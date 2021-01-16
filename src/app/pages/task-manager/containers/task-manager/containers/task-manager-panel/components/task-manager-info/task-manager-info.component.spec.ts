import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerInfoComponent } from './task-manager-info.component';

describe('TaskManagerInfoComponent', () => {
  let component: TaskManagerInfoComponent;
  let fixture: ComponentFixture<TaskManagerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskManagerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
