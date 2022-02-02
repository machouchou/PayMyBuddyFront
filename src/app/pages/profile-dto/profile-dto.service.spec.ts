import { TestBed } from '@angular/core/testing';

import { ProfileDtoService } from './profile-dto.service';

describe('ProfileDtoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileDtoService = TestBed.get(ProfileDtoService);
    expect(service).toBeTruthy();
  });
});
