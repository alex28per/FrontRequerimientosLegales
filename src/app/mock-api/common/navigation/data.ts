/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboards',
        title: 'Normas',
        type : 'group',
        icon : 'heroicons_outline:chart-pie',
        children : [
            {
                id: 'dashboards.mantenimiento',
                title: 'Mantenimiento',
                type : 'basic',
                icon : 'heroicons_outline:cog-6-tooth',
                link : '/dashboards/mantenimiento',
            },
            {
                id: 'dashboards.buscador',
                title: 'Buscador',
                type : 'basic',
                icon : 'heroicons_outline:magnifying-glass',
                link : '/dashboards/buscador',
            },
            {
                id: 'dashboards.poraprobar',
                title: 'Por Aprobar',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-document-check',
                link : '/dashboards/paraprobar',
            },
        ]
    },
    {
        id   : 'dashboards2',
        title: 'Requerimientos Legales',
        type : 'group',
        icon : 'heroicons_outline:chart-pie',
        children : [
            {
                id: 'dashboards2.dashboard',
                title: 'Dashboard',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboards/dashboard',
            },
            {
                id: 'dashboards2.proyectos',
                title: 'Proyectos',
                type : 'basic',
                icon : 'heroicons_outline:scale',
                link : '/dashboards/proyectos',
            },
            {
                id: 'dashboards2.plantillas',
                title: 'Plantillas',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-document',
                link : '/dashboards/plantillas',
            },
        ]
    },
    {
        id   : 'dashboards3',
        title: 'Administración',
        type : 'group',
        icon : 'heroicons_outline:chart-pie',
        children : [
            {
                id: 'dashboards3.empresas',
                title: 'Empresas',
                type : 'basic',
                icon : 'heroicons_outline:building-office',
                link : '/dashboards/empresas',
            },
            {
                id: 'dashboards3.usuarios',
                title: 'Usuarios',
                type : 'basic',
                icon : 'heroicons_outline:user-group',
                link : '/dashboards/usuarios',
            },
            {
                id: 'dashboards3.perfiles',
                title: 'Perfiles',
                type : 'basic',
                icon : 'heroicons_outline:bars-4',
                link : '/dashboards/perfiles',
            },
            {
                id: 'dashboards3.planes',
                title: 'Planes',
                type : 'basic',
                icon : 'heroicons_outline:credit-card',
                link : '/dashboards/planes',
            },
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
