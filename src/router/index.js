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
            name : 'Rutas', 
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
            name : 'Operadores', 
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
            name : 'Unidades', 
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
            name : 'Supervisor', 
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
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: {
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