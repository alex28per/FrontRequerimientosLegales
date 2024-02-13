import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ProyectosComponent } from 'app/modules/admin/dashboards/proyectos/proyectos.component';


export default [
    {
        path     : '',
        component: ProyectosComponent
    },
] as Routes;
