import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Lib2Component} from './lib2.component';
import {Lib1Module} from 'lib1';

describe('Lib2Component', () => {
    let component: Lib2Component;
    let fixture: ComponentFixture<Lib2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                Lib1Module,
            ],
            declarations: [Lib2Component]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Lib2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
