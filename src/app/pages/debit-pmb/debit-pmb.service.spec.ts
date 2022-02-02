import { TestBed } from '@angular/core/testing';

import { DebitPmbService } from './debit-pmb.service';

describe('DebitPmbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DebitPmbService = TestBed.get(DebitPmbService);
    expect(service).toBeTruthy();
  });
});
