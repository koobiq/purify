import { TestBed } from '@angular/core/testing';

import { PurifyService } from './../lib/purify.service';

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
