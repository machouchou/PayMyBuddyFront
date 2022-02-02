import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDtoComponent } from './profile-dto.component';

describe('ProfileDtoComponent', () => {
  let component: ProfileDtoComponent;
  let fixture: ComponentFixture<ProfileDtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
