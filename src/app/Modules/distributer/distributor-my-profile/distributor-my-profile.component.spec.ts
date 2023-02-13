import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorMyProfileComponent } from './distributor-my-profile.component';

describe('DistributorMyProfileComponent', () => {
  let component: DistributorMyProfileComponent;
  let fixture: ComponentFixture<DistributorMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributorMyProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributorMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
