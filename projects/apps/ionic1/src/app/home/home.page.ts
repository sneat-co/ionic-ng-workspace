import {Component} from '@angular/core';
import {Lib0Service} from 'lib0';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    public foo0: string;

    constructor(
        lib0Service: Lib0Service,
    ) {
        this.foo0 = lib0Service.foo0();
    }
}
