import { TestBed } from '@angular/core/testing';

import { EncuentroService } from './encuentro.service';

describe('EncuentroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncuentroService = TestBed.get(EncuentroService);
    expect(service).toBeTruthy();
  });
});
