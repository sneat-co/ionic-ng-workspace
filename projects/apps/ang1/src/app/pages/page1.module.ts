import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Page1Component} from './page1';
import {Lib1Module} from 'lib1';

@NgModule({
    declarations: [
        Page1Component,
    ],
    imports: [
        Lib1Module,
        RouterModule.forChild([{path: '', component: Page1Component}]),
    ],
})
export class Page1Module {
}
