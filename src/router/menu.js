export default {
    menu :[
        // {
        //     name : 'Dashboard',
        //     only : true,
        //     down : false,
        //     path : '/',
        //     icon : 'fa fa-home',            
        //     class: 'nav-item mT-30 actived',
        //     toggle : false,
        // },
        {
            name : 'Catalogo',
            only : false,
            down : true,
            path : '/',
            icon : 'fa fa-list',
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
            icon : 'fa fa-laptop',
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
                    path : '/',
                    icon : ''
                }
            ]            
        },
        {
            name : 'Notificaciones',
            only : true,
            down : false,
            path : '/',
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
                    name : 'Historico unidad',
                    path : '/',
                    icon : ''
                },
                {
                    name : 'Viajes',
                    path : '/',
                    icon : ''
                },
                {
                    name : 'Comentarios',
                    path : '/',
                    icon : ''
                },
                {
                    name : 'Prograamción',
                    path : '/',
                    icon : ''
                },
                {
                    name : 'Operadores de ruta',
                    path : '/',
                    icon : ''
                }
            ]                
        },
        {
            name : 'Conbustible',
            only : false,
            down : true,
            path : '/',
            icon : 'fa fa-bus',
            class: 'nav-item dropdown',
            toggle : false,
            submenu : [
                {
                    name : 'Cargas',
                    path : '/',
                    icon : ''
                },
                {
                    name : 'Alertas',
                    path : '/',
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
                    path : '/',
                    icon : ''
                },
                {
                    name : 'Comentarios x categoria',
                    path : '/',
                    icon : ''
                }
            ] 
        },
      ]
}