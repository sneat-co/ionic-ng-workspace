import { TestBed } from '@angular/core/testing';

import { Lib1Service } from './lib1.service';

describe('BlankLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Lib1Service = TestBed.get(Lib1Service);
    expect(service).toBeTruthy();
  });
});
