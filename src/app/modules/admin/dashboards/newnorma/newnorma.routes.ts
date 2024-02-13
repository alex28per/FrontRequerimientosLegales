import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { NewnormaComponent } from 'app/modules/admin/dashboards/newnorma/newnorma.component';


export default [
    {
        path     : '',
        component: NewnormaComponent
    },
] as Routes;
