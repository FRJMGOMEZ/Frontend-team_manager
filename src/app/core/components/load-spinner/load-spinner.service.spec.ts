/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadSpinnerService } from './load-spinner.service';

describe('Service: LoadSpinner', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadSpinnerService]
    });
  });

  it('should ...', inject([LoadSpinnerService], (service: LoadSpinnerService) => {
    expect(service).toBeTruthy();
  }));
});
