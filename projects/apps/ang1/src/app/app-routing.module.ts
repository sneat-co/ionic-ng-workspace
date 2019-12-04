import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    {
        path: 'page0', loadChildren: () => import('./pages/page0.module').then(m => m.Page0Module),
    },
    {
        path: 'page1', loadChildren: () => import('./pages/page1.module').then(m => m.Page1Module)
    },
    {
        path: 'page2', loadChildren: () => import('./pages/page2.module').then(m => m.Page2Module),
    },
    {
        path: 'shared-page-1', loadChildren: () => import ('shared-code/pages/shared-page-1.module').then(m => m.SharedPage1Module)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
