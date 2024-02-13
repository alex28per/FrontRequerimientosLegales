import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from 'app/modules/admin/dashboards/dashboard/dashboard.component';


export default [
    {
        path     : '',
        component: DashboardComponent
    },
] as Routes;
