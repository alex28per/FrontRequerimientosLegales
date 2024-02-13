import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { PlanesComponent } from 'app/modules/admin/dashboards/planes/planes.component';


export default [
    {
        path     : '',
        component: PlanesComponent
    },
] as Routes;
