import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedPage1Component} from './shared-page-1.component';
import {SharedComponentsModule} from '../components/shared-components.module';

@NgModule({
    declarations: [SharedPage1Component],
    imports: [
        CommonModule,
        SharedComponentsModule,
        RouterModule.forChild([{path: '', component: SharedPage1Component}]),
    ]
})
export class SharedPage1Module {
}
