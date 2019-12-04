import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedComponentsModule} from 'shared-code/components/shared-components.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedComponentsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
