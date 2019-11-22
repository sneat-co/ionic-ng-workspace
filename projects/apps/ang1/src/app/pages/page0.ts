import {Component} from '@angular/core';
import {Lib0Service} from 'lib0';
import {Lib1Service} from 'lib1';
import {Lib2Service} from 'lib2';

@Component({
    selector: 'app-about-page',
    template: `
        <h1>Page 0: {{result1}} {{result2}}</h1>
        <lib0-component></lib0-component>
        <lib1-component></lib1-component>
        <lib2-component></lib2-component>

        <a routerLink="/page1">Page 1</a>
        <a routerLink="/page2">Page 2</a>
    `,
})
export class Page0Component {
    public result0: string;
    public result1: string;
    public result2: string;

    constructor(
        lib0Service: Lib0Service,
        lib1Service: Lib1Service,
        lib2Service: Lib2Service,
    ) {
        this.result0 = lib0Service.foo0();
        this.result1 = lib1Service.foo1();
        this.result2 = lib2Service.foo2();
    }
}
