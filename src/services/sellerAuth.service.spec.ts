/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SellerAuthService } from './sellerAuth.service';

describe('Service: SellerAuth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellerAuthService]
    });
  });

  it('should ...', inject([SellerAuthService], (service: SellerAuthService) => {
    expect(service).toBeTruthy();
  }));
});
