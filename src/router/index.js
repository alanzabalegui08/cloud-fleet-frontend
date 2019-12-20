import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/Home.vue';
import LoginView from '../views/LoginPage.vue';
// customers
import CustomerView from '../views/customers/index.vue';
import CustomerDataView from '../views/customers/data.vue';
import CustomerCreateView from '../views/customers/create.vue';
// paths 
import PathView from '../views/paths/index.vue';
import PathDataView from '../views/paths/data.vue';
import PathCreateView from '../views/paths/create.vue';

// drivers
import DriverView from '../views/driver/index.vue';
import DriverDataView from '../views/driver/data.vue';
import DriverCreateView from '../views/driver/create.vue';

// truck
import TruckView from '../views/truck/index.vue';
import TruckDataView from '../views/truck/data.vue';
import TruckCreateView from '../views/truck/create.vue';

// truck
import SupervisorView from '../views/supervisor/index.vue';
import SupervisorDataView from '../views/supervisor/data.vue';
import SupervisorCreateView from '../views/supervisor/create.vue';

// stations
import StationsView from '../views/stations/index.vue';
import StationsDataView from '../views/stations/data.vue';
import StationsCreateView from '../views/stations/create.vue';

//banners
import BannerView from '../views/banner/index.vue';
import BannerDataView from '../views/banner/data.vue';
import BannerCreateView from '../views/banner/create.vue';

//regions
import RegionsView from '../views/regions/index.vue';
import RegionsDataView from '../views/regions/data.vue';
import RegionsCreateView from '../views/regions/create.vue';

//monitor
import MonitorView from '../views/monitor';

//programacion
import ProgrammingView from '../views/programming';
import PvxrView from '../views/pvxr';
import NotificationView from '../views/notification';
import HistoryTruckView from '../views/historico';
import TravelReportView from '../views/travel';
import CommentsView from '../views/comments';
import ProgramminReportView from '../views/programmingreport';
import DriverPathView from '../views/driverWithoutPath';


// load gas
import LoadGasView from '../views/loadgas';
import LoadGasDataView from '../views/loadgas/data.vue';
import LoadGasCreateView from '../views/loadgas/create.vue';
import AlertGas  from  '../views/alerts';




Vue.use(Router);


export const router  = new Router({
    mode : 'history',
    routes : [
        {
            path : '/',
            name : 'Home', 
            component : HomeView,
            meta : {
                requiresAuth: true,
            }
        },
        {
            path : '/clientes',
            component : CustomerView,
            children : [
                {
                    path : '',
                    component : CustomerDataView
                },
                {
                    path : 'nuevo',
                    component : CustomerCreateView
                }
            ],
            meta : {
                requiresAuth: true,
            }
        },
        {
            path : '/rutas',
            component : PathView,
            children : [
                {
                    path : '',
                    component : PathDataView
                },
                {
                    path : 'nuevo',
                    component : PathCreateView
                }
            ],            
            meta : {
                requiresAuth: true,
            }
        },
        {
            path : '/operadores',
            component : DriverView,
            children : [
                {
                    path : '',
                    component : DriverDataView
                },
                {
                    path : 'nuevo',
                    component : DriverCreateView
                }
            ],            
            meta : {
                requiresAuth: true,
            }
        },
        {
            path : '/unidades',
            component : TruckView,
            children : [
                {
                    path : '',
                    component : TruckDataView
                },
                {
                    path : 'nuevo',
                    component : TruckCreateView
                }
            ],            
            meta : {
                requiresAuth: true,
            }
        },
        {
            path : '/supervisor',
            component : SupervisorView,
            children : [
                {
                    path : '',
                    component : SupervisorDataView
                },
                {
                    path : 'nuevo',
                    component : SupervisorCreateView
                }
            ],            
            meta : {
                requiresAuth: true,
            }
        },
        {
            path : '/estaciones',
            component : StationsView,
            children : [
                {
                    path : '',
                    component : StationsDataView
                },
                {
                    path : 'nuevo',
                    component : StationsCreateView
                }
            ],            
            meta : {
                requiresAuth: true,
            }
        },
        {
            path : '/banners',
            component : BannerView,
            children : [
                {
                    path : '',
                    component : BannerDataView
                },
                {
                    path : 'nuevo',
                    component : BannerCreateView
                }
            ],            
            meta : {
                requiresAuth: true,
            }
        },
        {
            path : '/regiones', 
            component : RegionsView,
            children : [
                {
                    path : '',
                    component : RegionsDataView
                },
                {
                    path : 'nuevo',
                    component : RegionsCreateView
                }
            ],            
            meta : {
                requiresAuth: true,
            }
        },
        {
            path : '/monitor',
            component : MonitorView,            
            meta : {
                requiresAuth: true,
            }
        },
        {
            path : '/programacion',
            component : ProgrammingView,            
            meta : {
                requiresAuth: true,
            }
        },
        {
            path : '/pvxr',
            name : 'PV XR', 
            component : PvxrView,            
            meta : {
                requiresAuth: true,
            }
        },
        {
            path : '/notificaciones',
            name : 'Notificaciones', 
            component : NotificationView,            
            meta : {
                requiresAuth: true,
            }
        },
        {
          path : '/historico-unidad',
          name : 'Historico de unidad',
          component : HistoryTruckView,            
          meta : {
              requiresAuth: true,
          }          
        },
        {
            path : '/viajes',
            name : 'Viajes',
            component : TravelReportView,            
            meta : {
                requiresAuth: true,
            }          
        },
        {
            path : '/comentarios',
            name : 'Comentarios',
            component : CommentsView,            
            meta : {
                requiresAuth: true,
            }          
        },
        {
            path : '/reporte-de-programacion',
            name : 'Reporte programacion',
            component : ProgramminReportView,            
            meta : {
                requiresAuth: true,
            }          
        },
        {
            path : '/operadore-sin-ruta',
            name : 'Operadores sin ruta',
            component : DriverPathView,            
            meta : {
                requiresAuth: true,
            }          
        },
        {
            path : '/carga-combustible',
            component : LoadGasView,
            children : [
                {
                    path : '',
                    component : LoadGasDataView
                },
                {
                    path : 'nuevo',
                    component : LoadGasCreateView
                }
            ],            
            meta : {
                requiresAuth: true,
            }
        },
        {
            path : '/alertas-combustibles',
            name : 'Alertas',
            component : AlertGas,            
            meta : {
                requiresAuth: true,
            }          
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta:   {
                guest: true
            }
        },
        {
            path : '*' ,
            redirect : '/'
        }
    ],
});

router.beforeEach((to, from, next) => {

  const storage = {
      name : 'sad',
      lastname : 'dasbdj'
  };
   //new Storage().getStorage;
  console.log(storage);

  if(to.matched.some(record => record.meta.requiresAuth)) {    
      if ( storage === null) {
        console.log(' one ');
        router.push('/login');
      } else {
        console.log('home');
        next();
      }
  } else if(to.matched.some(record => record.meta.guest)) {
      if ( to.path == '/' && storage === null) {
        console.log(' two ');
        router.push('/login');
        console.log(' two ');
      } else {
        console.log(' tree ');
        next();
      }
  }else {
    next() 
  }
})