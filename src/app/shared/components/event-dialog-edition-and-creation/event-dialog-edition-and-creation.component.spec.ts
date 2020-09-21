import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventDialogEditionAndCreationComponent } from '../event-dialog-edition/event-dialog-edition.component';


describe('EventDialogEditionComponent', () => {
  let component: EventDialogEditionAndCreationComponent;
  let fixture: ComponentFixture<EventDialogEditionAndCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventDialogEditionAndCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDialogEditionAndCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
