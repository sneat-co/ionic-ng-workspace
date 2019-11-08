import {Component} from '@angular/core';
import {Lib2Service} from 'lib2/services/lib2.service';

@Component({
    selector: 'app-about-page',
    template: `
        <h1>Page 2: {{result2}}</h1>
        <lib2-component></lib2-component>

        <a routerLink="/page0">Page 0</a>
        <a routerLink="/page1">Page 1</a>
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
