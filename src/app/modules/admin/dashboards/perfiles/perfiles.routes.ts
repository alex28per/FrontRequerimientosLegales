import { inject } from '@angular/core';
import { Routes } from '@angular/router';

import { PerfilesComponent } from 'app/modules/admin/dashboards/perfiles/perfiles.component';


export default [
    {
        path     : '',
        component: PerfilesComponent
    },
] as Routes;
