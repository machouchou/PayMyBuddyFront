import { TestBed } from '@angular/core/testing';

import { DepositAmountService } from './deposit-amount.service';

describe('DepositAmountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepositAmountService = TestBed.get(DepositAmountService);
    expect(service).toBeTruthy();
  });
});
