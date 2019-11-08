import { TestBed } from '@angular/core/testing';

import { BlankLibService } from './lib2.service';

describe('Lib2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlankLibService = TestBed.get(BlankLibService);
    expect(service).toBeTruthy();
  });
});
