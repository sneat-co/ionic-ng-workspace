import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Lib1Component} from './lib1.component';
import {Lib0Module} from 'lib0';

describe('Lib1Component', () => {
    let component: Lib1Component;
    let fixture: ComponentFixture<Lib1Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                Lib0Module,
            ],
            declarations: [Lib1Component]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Lib1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
