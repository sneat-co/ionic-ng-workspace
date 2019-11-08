import {Component} from '@angular/core';
import {Lib1Service} from 'lib1/services/lib1.service';

@Component({
  selector: 'app-home-page',
  template: `
      <h1>Page 1: {{result1}}</h1>
      <lib1-component></lib1-component>

      <a routerLink="/page0">Page 0</a>
      <a routerLink="/page2">Page 2</a>
  `,
})
export class Page1Component {
  public result1: string;

  constructor(
    lib1Service: Lib1Service,
  ) {
    this.result1 = lib1Service.foo1();
  }
}
