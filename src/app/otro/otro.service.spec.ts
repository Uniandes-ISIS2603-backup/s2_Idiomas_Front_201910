import { TestBed } from '@angular/core/testing';

import { OtroService } from './otro.service';

describe('OtroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtroService = TestBed.get(OtroService);
    expect(service).toBeTruthy();
  });
});
