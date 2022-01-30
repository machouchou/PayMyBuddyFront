import { TestBed } from '@angular/core/testing';

import { UserStoragService } from './user-storag.service';

describe('UserStoragService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserStoragService = TestBed.get(UserStoragService);
    expect(service).toBeTruthy();
  });
});
