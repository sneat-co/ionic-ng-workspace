import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'lib2-component',
    template: `
        <p>
            lib2 works with referencing lib1 component!
        </p>
        <lib1-component></lib1-component>
    `,
    styles: []
})
export class Lib2Component implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
