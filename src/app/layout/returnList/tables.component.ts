import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PaginationComponent } from '../bs-component/components/pagination/pagination.component';
@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
