import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorProductsComponent } from './distributor-products.component';

describe('DistributorProductsComponent', () => {
  let component: DistributorProductsComponent;
  let fixture: ComponentFixture<DistributorProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributorProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributorProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
