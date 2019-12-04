import {Component, Input} from '@angular/core';

@Component({
    selector: 'shared-pages-menu',
    template: `
        <ul>
            <li>
                <b *ngIf="page === 'page-0'">Page 0</b>
                <a *ngIf="page !== 'page-0'" routerLink="/page0">Page 0</a>
            </li>
            <li>
                <b *ngIf="page === 'page-1'">Page 1</b>
                <a *ngIf="page !== 'page-1'" routerLink="/page1">Page 1</a>
            </li>
            <li>
                <b *ngIf="page === 'page-2'">Page 2</b>
                <a *ngIf="page !== 'page-2'" routerLink="/page2">Page 2</a>
            </li>
            <li>
                <b *ngIf="page === 'shared-page-1'">Shared Page 1</b>
                <a *ngIf="page !== 'shared-page-1'" routerLink="/shared-page-1">Shared Page #1</a>
            </li>
        </ul>
    `,
})
export class PagesMenuComponent {
    @Input() page: 'page-0' | 'page-1' | 'page-2' | 'shared-page-1';
}
