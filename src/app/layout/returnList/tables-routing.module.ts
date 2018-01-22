import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [
    {
        path: '',
        component: TablesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), NgbModule.forRoot()],
    exports: [RouterModule]
})
export class TablesRoutingModule {}
