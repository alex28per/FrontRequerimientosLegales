import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { EmpresasComponent } from 'app/modules/admin/dashboards/empresas/empresas.component';


export default [
    {
        path     : '',
        component: EmpresasComponent
    },
] as Routes;
