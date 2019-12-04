import {Component} from '@angular/core';

@Component({
    selector: 'shared-page-1',
    template: `
        <h1>Shared page # 1</h1>
        <p>First shared page</p>
        <shared-pages-menu page="shared-page-1"></shared-pages-menu>
    `,
})
export class SharedPage1Component {
}
