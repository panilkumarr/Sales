import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorPurchaseOrderComponent } from './distributor-purchase-order.component';

describe('DistributorPurchaseOrderComponent', () => {
  let component: DistributorPurchaseOrderComponent;
  let fixture: ComponentFixture<DistributorPurchaseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributorPurchaseOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributorPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
