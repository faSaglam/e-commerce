/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustromerAuthService } from './custromerAuth.service';

describe('Service: CustromerAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustromerAuthService],
    });
  });

  it('should ...', inject(
    [CustromerAuthService],
    (service: CustromerAuthService) => {
      expect(service).toBeTruthy();
    }
  ));
});
