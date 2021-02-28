import { TestBed } from '@angular/core/testing';

import { LpLocalStorageService } from './lp-local-storage.service';

describe('LpLocalStorageService', () => {
  let service: LpLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LpLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
