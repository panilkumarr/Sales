import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorHomePageComponent } from './distributor-home-page.component';

describe('DistributorHomePageComponent', () => {
  let component: DistributorHomePageComponent;
  let fixture: ComponentFixture<DistributorHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributorHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributorHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
