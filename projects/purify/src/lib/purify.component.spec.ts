import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PurifyComponent} from './purify.component';

describe('PurifyComponent', () => {
    let component: PurifyComponent;
    let fixture: ComponentFixture<PurifyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PurifyComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PurifyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
