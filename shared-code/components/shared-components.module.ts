import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedCopyrightComponent} from './shared-copyright.component';
import {PagesMenuComponent} from './pages-menu.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        SharedCopyrightComponent,
        PagesMenuComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        SharedCopyrightComponent,
        PagesMenuComponent,
    ]
})
export class SharedComponentsModule {

}
