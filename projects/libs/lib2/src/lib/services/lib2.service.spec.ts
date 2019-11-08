import {TestBed} from '@angular/core/testing';

import {Lib2Service} from './lib2.service';

describe('Lib2Service', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [Lib2Service],
    }));

    it('should be created', () => {
        const service: Lib2Service = TestBed.get(Lib2Service);
        expect(service).toBeTruthy();
    });
});
