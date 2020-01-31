import Vue from 'vue';
import Router from 'vue-router';
import { CONFIG_ROUTES } from '../common/config';
import { userService } from "@/service";

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: CONFIG_ROUTES.home,
            name: 'Home',
            component: () => import('@/views/Home.vue'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.customer,
            component: () => import('@/views/customers/index.vue'),
            children: [
                {
                    path: '',
                    component: () => import('@/views/customers/data.vue'),
                },
                {
                    path: CONFIG_ROUTES.customerCreate,
                    component: () => import('@/views/customers/create.vue'),
                }
            ],
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.path,
            component: () => import('@/views/paths/index.vue'),
            children: [{
                    path: '',
                    component: () => import('@/views/paths/data.vue'),
                },
                {
                    path: CONFIG_ROUTES.pathCreate,
                    component: () => import('@/views/paths/create.vue'),
                }
            ],
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.driver,
            component: () => import('@/views/driver/index.vue'),
            children: [{
                    path: '',
                    component: () => import('@/views/driver/data.vue'),
                },
                {
                    path: CONFIG_ROUTES.driverCreate,
                    component: () => import('@/views/driver/create.vue'),
                }
            ],
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.truck,
            component: () => import('@/views/truck/index.vue'),
            children: [{
                    path: '',
                    component: () => import('@/views/truck/data.vue'),
                },
                {
                    path: CONFIG_ROUTES.truckCreate,
                    component: () => import('@/views/truck/create.vue'),
                }
            ],
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.supervisor,
            component: () => import('@/views/supervisor/index.vue'),
            children: [{
                    path: '',
                    component: () => import('@/views/supervisor/data.vue'),
                },
                {
                    path: CONFIG_ROUTES.supervisorCreate,
                    component: () => import('@/views/supervisor/create.vue'),
                }
            ],
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.station,
            component: () => import('@/views/stations/index.vue'),
            children: [{
                    path: '',
                    component: () => import('@/views/stations/data.vue'),
                },
                {
                    path: CONFIG_ROUTES.stationCreate,
                    component: () => import('@/views/stations/create.vue'),
                }
            ],
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.banner,
            component: () => import('@/views/banner/index.vue'),
            children: [{
                    path: '',
                    component: () => import('@/views/banner/data.vue'),
                },
                {
                    path: CONFIG_ROUTES.bannerCreate,
                    component: () => import('@/views/banner/create.vue'),
                }
            ],
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.region,
            component: () => import('@/views/regions/index.vue'),
            children: [{
                    path: '',
                    component: () => import('@/views/regions/data.vue'),
                },
                {
                    path: CONFIG_ROUTES.regionCreate,
                    component: () => import('@/views/regions/create.vue'),
                }
            ],
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.monitor,
            component: () => import('@/views/monitor'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.programming,
            component: () => import('@/views/programming'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.pvxr,
            name: 'PV XR',
            component: () => import('@/views/pvxr'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.notification,
            name: 'Notificaciones',
            component: () => import('@/views/notification'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.historyTruck,
            name: 'Historico de unidad',
            component: () => import('@/views/historico'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.travel,
            name: 'Viajes',
            component: () => import('@/views/travel'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.commnets,
            name: 'Comentarios',
            component: () => import('@/views/comments'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.reportProgramming,
            name: 'Reporte programacion',
            component: () => import('@/views/programmingreport'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.driverWithoutPath,
            name: 'Operadores sin ruta',
            component: () => import('@/views/driverWithoutPath'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.loagGas,
            component: () => import('@/views/loadgas'),
            children: [{
                    path: '',
                    component: () => import('@/views/loadgas/data.vue'),
                },
                {
                    path: CONFIG_ROUTES.loagGasCreate,
                    component: () => import('@/views/loadgas/create.vue'),
                }
            ],
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.alertGas,
            name: 'Alertas',
            component: () => import('@/views/alerts'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.alertGasDetails,
            name: 'alertadetalles',
            component: () => import('@/views/alerts/list.vue'),
            props: true,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.chartPathCustomer,
            name: 'Grafica-rutas-cliente',
            component: () => import('@/views/chart/'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.chartCommentsCategory,
            name: 'Grafica-comentarios-categoria',
            component: () => import('@/views/chart/comments-category.vue'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: CONFIG_ROUTES.login,
            name: 'login',
            component: () => import('@/views/LoginPage.vue'),
            meta: {
                guest: true
            }
        },
        {
            path: '*',
            redirect: CONFIG_ROUTES.home
        }
    ],
});

router.beforeEach((to, from, next) => {

    const storage = userService.getUserStore();

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (storage === null) {
            router.push(CONFIG_ROUTES.login);
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (to.path === CONFIG_ROUTES.home && storage === null) {
            router.push(CONFIG_ROUTES.login);
        } else {
            if (to.path === CONFIG_ROUTES.login && storage !== null) {
                router.push(CONFIG_ROUTES.home);
            }
            next();
        }
    } else {
        next();
    }
});