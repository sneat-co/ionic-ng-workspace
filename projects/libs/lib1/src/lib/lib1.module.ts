import {NgModule} from '@angular/core';
import {Lib1Component} from './components/lib1.component';
import {Lib1Service} from './services/lib1.service';
import {Lib0Module} from 'lib0';

@NgModule({
  declarations: [
    Lib1Component,
  ],
  imports: [
      Lib0Module,
  ],
  providers: [
    Lib1Service,
  ],
  exports: [
    Lib1Component,
  ],
})
export class Lib1Module {
}
