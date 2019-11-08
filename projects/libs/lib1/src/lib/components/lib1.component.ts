import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib1-component',
  template: `
    <p>
      lib1 works!
    </p>
  `,
  styles: []
})
export class Lib1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
