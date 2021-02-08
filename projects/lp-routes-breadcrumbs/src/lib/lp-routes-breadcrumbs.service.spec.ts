import { TestBed } from '@angular/core/testing';

import { LpRoutesBreadcrumbsService } from './lp-routes-breadcrumbs.service';

describe('LpRoutesBreadcrumbsService', () => {
  let service: LpRoutesBreadcrumbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LpRoutesBreadcrumbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
