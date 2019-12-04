import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Page2Component} from './page2';
import {Lib2Module} from 'lib2';
import {SharedComponentsModule} from 'shared-code/components/shared-components.module';

@NgModule({
    declarations: [
        Page2Component,
    ],
    imports: [
        SharedComponentsModule,
        Lib2Module,
        RouterModule.forChild([{path: '', component: Page2Component}]),
    ],
})
export class Page2Module {
}
