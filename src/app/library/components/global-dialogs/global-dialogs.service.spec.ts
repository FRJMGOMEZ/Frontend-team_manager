import { TestBed } from '@angular/core/testing';

import { GlobalDialogsService } from './global-dialogs.service';

describe('GlobalDialogsService', () => {
  let service: GlobalDialogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalDialogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
