import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { MantenimientoComponent } from 'app/modules/admin/dashboards/mantenimiento/mantenimiento.component';


export default [
    {
        path     : '',
        component: MantenimientoComponent
    },
] as Routes;
