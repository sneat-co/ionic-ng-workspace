import {Component} from '@angular/core';
import {Lib2Service} from 'lib2';

@Component({
    selector: 'app-about-page',
    template: `
        <h1>Page 2: {{result2}}</h1>
        <lib2-component></lib2-component>

        <shared-pages-menu page="page-2"></shared-pages-menu>
        <shared-copyright></shared-copyright>
    `,
})
export class Page2Component {
    public result2: string;

    constructor(
        lib2Service: Lib2Service,
    ) {
        this.result2 = lib2Service.foo2();
    }
}
