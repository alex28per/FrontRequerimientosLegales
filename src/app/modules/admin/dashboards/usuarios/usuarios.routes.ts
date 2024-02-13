import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { UsuariosComponent } from 'app/modules/admin/dashboards/usuarios/usuarios.component';


export default [
    {
        path     : '',
        component: UsuariosComponent
    },
] as Routes;
