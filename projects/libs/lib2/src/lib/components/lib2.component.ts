import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'lib2-component',
    template: `
        <p>
            lib2 works!
        </p>
    `,
    styles: []
})
export class Lib2Component implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
