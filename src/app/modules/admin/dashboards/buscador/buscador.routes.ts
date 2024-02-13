import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { BuscadorComponent } from 'app/modules/admin/dashboards/buscador/buscador.component';



export default [
    {
        path     : '',
        component: BuscadorComponent
    },
] as Routes;
