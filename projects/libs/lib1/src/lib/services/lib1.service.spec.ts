import {TestBed} from '@angular/core/testing';

import {Lib1Service} from './lib1.service';

describe('Lib1Service', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [Lib1Service],
    }));

    it('should be created', () => {
        const service: Lib1Service = TestBed.get(Lib1Service);
        expect(service).toBeTruthy();
    });
});
