import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Page0Component} from './page0';
import {Lib0Module} from 'lib0/lib0.module';
import {Lib1Module} from 'lib1/lib1.module';
import {Lib2Module} from 'lib2/lib2.module';

@NgModule({
    declarations: [
        Page0Component,
    ],
    imports: [
        Lib0Module,
        Lib1Module,
        Lib2Module,
        RouterModule.forChild([{path: '', component: Page0Component}]),
    ],
})
export class Page0Module {
}
