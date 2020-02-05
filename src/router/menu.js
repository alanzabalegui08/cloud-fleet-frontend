import imgGasGray from '@/assets/static/images/combustible_gray.png';
import imgMapGray from '@/assets/static/images/mapa_gray.png';
import imgCatalogoGray from '@/assets/static/images/capas.png';

export default {
    menu :[
        {
            name : 'Catálogo',
            only : false,
            down : true,
            path : '/',
            icon : {        
                icon : imgCatalogoGray,
                iconHover : imgCatalogoGray,
                img : true,
            },
            class: 'nav-item dropdown',
            toggle : false,
            submenu : [
                {
                    name : 'Clientes',
                    path : '/clientes',
                    icon : ''
                },
                {
                    name : 'Rutas',
                    path : '/rutas',
                    icon : ''
                },
                {
                    name : 'Operadores',
                    path : '/operadores',
                    icon : ''
                },
                {
                    name : 'Unidades',
                    path : '/unidades',
                    icon : ''},
                {
                    name : 'Supervisores',
                    path : '/supervisor',
                    icon : ''
                },
                {
                    name : 'Estaciones',
                    path : '/estaciones',
                    icon : ''
                },
                {
                    name : 'Banners',
                    path : '/banners',
                    icon : ''
                },
                {
                    name : 'Regiones',
                    path : '/regiones',
                    icon : ''
                }
            ]
        },
        {
            name : 'Monitor',
            only : true,
            down : false,
            path : '/monitor',
            icon : {        
                icon : imgMapGray,
                iconHover : imgMapGray,
                img : true,
            },
            class: 'nav-item dropdown',
            toggle : false,
        },
        {
            name : 'Programación',
            only : false,
            down : true,
            path : '/',
            icon : 'fa fa-list-alt',
            class: 'nav-item dropdown',
            toggle : false,
            submenu : [
                {
                    name : 'Programación',
                    path : '/programacion',
                    icon : ''
                },
                {
                    name : 'PV XR',
                    path : '/pvxr',
                    icon : ''
                }
            ]            
        },
        {
            name : 'Notificaciones',
            only : true,
            down : false,
            path : '/notificaciones',
            icon : 'fa fa-bell',
            class: 'nav-item dropdown',
            toggle : false,
        },
        {
            name : 'Reportes',
            only : false,
            down : true,
            path : '/',
            icon : 'fa fa-file',
            class: 'nav-item dropdown',
            toggle : false,
            submenu : [
                {
                    name : 'Histórico unidad',
                    path : '/historico-unidad',
                    icon : ''
                },
                {
                    name : 'Viajes',
                    path : '/viajes',
                    icon : ''
                },
                {
                    name : 'Comentarios',
                    path : '/comentarios',
                    icon : ''
                },
                {
                    name : 'Programación',
                    path : '/reporte-de-programacion',
                    icon : ''
                },
                {
                    name : 'Operadores sin ruta',
                    path : '/operadore-sin-ruta',
                    icon : ''
                }
            ]                
        },
        {
            name : 'Combustible',
            only : false,
            down : true,
            path : '/',
            icon : {        
                icon : imgGasGray,
                iconHover : imgGasGray,
                img : true,
            },
            class: 'nav-item dropdown',
            toggle : false,
            submenu : [
                {
                    name : 'Cargas',
                    path : '/carga-combustible',
                    icon : ''
                },
                {
                    name : 'Alertas',
                    path : '/alertas-combustibles',
                    icon : ''
                }
            ]              
        },
        {
            name : 'Grafica',
            only : false,
            down : true,
            path : '/',
            icon : 'fa fa-line-chart',
            class: 'nav-item dropdown',
            toggle : false,
            submenu : [
                {
                    name : 'Rutas x cliente',
                    path : '/grafica/rutas-cliente',
                    icon : ''
                },
                {
                    name : 'Comentarios x categoría',
                    path : '/grafica/comentarios-categoria',
                    icon : ''
                }
            ] 
        },
      ]
}