import {NgModule} from '@angular/core';
import {Lib0Component} from './components/lib0.component';
import {Lib0Service} from './services/lib0.service';

@NgModule({
  declarations: [
    Lib0Component,
  ],
  imports: [],
  providers: [
    Lib0Service,
  ],
  exports: [
    Lib0Component,
  ],
})
export class Lib0Module {
}
