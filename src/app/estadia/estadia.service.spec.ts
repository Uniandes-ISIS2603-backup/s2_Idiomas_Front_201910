import { TestBed } from '@angular/core/testing';

import { EstadiaService } from './estadia.service';

describe('EstadiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstadiaService = TestBed.get(EstadiaService);
    expect(service).toBeTruthy();
  });
});
