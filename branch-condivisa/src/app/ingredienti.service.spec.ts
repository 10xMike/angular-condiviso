import { TestBed } from '@angular/core/testing';

import { IngredientiService } from './ingredienti.service';

describe('IngredientiService', () => {
  let service: IngredientiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
