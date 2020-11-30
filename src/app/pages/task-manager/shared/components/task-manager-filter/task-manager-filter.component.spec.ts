import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerFilterComponent } from './task-manager-filter.component';

describe('TaskManagerFilterComponent', () => {
  let component: TaskManagerFilterComponent;
  let fixture: ComponentFixture<TaskManagerFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskManagerFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
