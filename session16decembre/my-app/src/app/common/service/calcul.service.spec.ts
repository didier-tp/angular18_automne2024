import { TestBed } from '@angular/core/testing';

import { CalculService } from './calcul.service';

describe('CalculService', () => {
  let service: CalculService;

  beforeEach(() => {
    TestBed.configureTestingModule({

    });
    service = TestBed.inject(CalculService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('ht=200,taux=20% , tva=240', () => {
    expect(service.calculTva(200,20)).toBeCloseTo(40.0);
  });

});

// ng test --include=**/service/calcul.service.spec.ts
