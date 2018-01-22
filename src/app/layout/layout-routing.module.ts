import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'createInvoice',
                loadChildren: './invoice/tables.module#TablesModule'
            },
            {
                path: 'returnProduct',
                loadChildren: './returnProduct/form.module#FormModule'
            },
            {
                path: 'listOfReturns',
                loadChildren: './returnList/tables.module#TablesModule'
            },
            {
                path: 'avilableProducts',
                loadChildren: './bs-element/bs-element.module#BsElementModule'
            },
            {
                path: 'addProducts',
                loadChildren: './addProduct/form.module#FormModule'
            },
            {
                path: 'listInvoices',
                loadChildren: './grid/grid.module#GridModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
