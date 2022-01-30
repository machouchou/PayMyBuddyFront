import { TestBed } from '@angular/core/testing';

import { ListTransactionsService } from './list-transactions.service';

describe('ListTransactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListTransactionsService = TestBed.get(ListTransactionsService);
    expect(service).toBeTruthy();
  });
});
