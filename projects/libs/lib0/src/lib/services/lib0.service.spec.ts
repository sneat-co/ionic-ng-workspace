import {TestBed} from '@angular/core/testing';

import {Lib0Service} from './lib0.service';

describe('Lib0Service', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [Lib0Service],
    }));

    it('should be created', () => {
        const service: Lib0Service = TestBed.get(Lib0Service);
        expect(service).toBeTruthy();
    });
});
