import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Page0Component} from './page0';
import {Lib0Module} from 'lib0';
import {Lib1Module} from 'lib1';
import {Lib2Module} from 'lib2';
import {SharedComponentsModule} from 'shared-code/components/shared-components.module';

@NgModule({
    declarations: [
        Page0Component,
    ],
    imports: [
        SharedComponentsModule,
        Lib0Module,
        Lib1Module,
        Lib2Module,
        RouterModule.forChild([{path: '', component: Page0Component}]),
    ],
})
export class Page0Module {
}
