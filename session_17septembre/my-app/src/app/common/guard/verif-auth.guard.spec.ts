import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { verifAuthGuard } from './verif-auth.guard';

describe('verifAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => verifAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
