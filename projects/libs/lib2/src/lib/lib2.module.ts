import {NgModule} from '@angular/core';
import {Lib2Component} from './components/lib2.component';
import {Lib2Service} from './services/lib2.service';

@NgModule({
  declarations: [
    Lib2Component,
  ],
  imports: [],
  providers: [
    Lib2Service,
  ],
  exports: [
    Lib2Component,
  ],
})
export class Lib2Module {
}
