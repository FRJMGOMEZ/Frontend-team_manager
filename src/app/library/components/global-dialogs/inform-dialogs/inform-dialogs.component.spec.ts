import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformDialogsComponent } from './inform-dialogs.component';

describe('InformDialogsComponent', () => {
  let component: InformDialogsComponent;
  let fixture: ComponentFixture<InformDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
