/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SellerOpService } from './seller-op.service';

describe('Service: SellerOp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellerOpService]
    });
  });

  it('should ...', inject([SellerOpService], (service: SellerOpService) => {
    expect(service).toBeTruthy();
  }));
});
