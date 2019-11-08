import { TestBed } from '@angular/core/testing';

import { Lib0Service } from './lib0.service';

describe('BlankLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Lib0Service = TestBed.get(Lib0Service);
    expect(service).toBeTruthy();
  });
});
