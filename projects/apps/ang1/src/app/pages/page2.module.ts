import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Page2Component} from './page2';
import {Lib2Module} from 'lib2/lib2.module';

@NgModule({
  declarations: [
      Page2Component,
  ],
  imports: [
    Lib2Module,
    RouterModule.forChild([{path: '', component: Page2Component}]),
  ],
})
export class Page2Module {
}
