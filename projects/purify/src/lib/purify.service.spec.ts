import {TestBed} from '@angular/core/testing';

import {PurifyService} from './purify.service';

describe('PurifyService', () => {
    let service: PurifyService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PurifyService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
