import { TestBed } from '@angular/core/testing';

import { ListFriendsService } from './list-friends.service';

describe('ListFriendsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListFriendsService = TestBed.get(ListFriendsService);
    expect(service).toBeTruthy();
  });
});
