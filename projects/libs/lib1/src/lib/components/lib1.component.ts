import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'lib1-component',
    template: `
        <p>
            lib1 works with referencing lib0!
        </p>
        <lib0-component></lib0-component>
    `,
    styles: []
})
export class Lib1Component implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
