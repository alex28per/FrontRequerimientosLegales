import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { PlantillasComponent } from 'app/modules/admin/dashboards/plantillas/plantillas.component';


export default [
    {
        path     : '',
        component: PlantillasComponent
    },
] as Routes;
