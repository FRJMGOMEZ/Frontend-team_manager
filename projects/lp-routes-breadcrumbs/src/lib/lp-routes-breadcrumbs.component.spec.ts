import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpRoutesBreadcrumbsComponent } from './lp-routes-breadcrumbs.component';

describe('LpRoutesBreadcrumbsComponent', () => {
  let component: LpRoutesBreadcrumbsComponent;
  let fixture: ComponentFixture<LpRoutesBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpRoutesBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpRoutesBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
