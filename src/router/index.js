import Vue from 'vue';
import Router from 'vue-router';
//import Storage  from '../service/Storage';
import HomeView from '../views/Home.vue';
import LoginView from '../views/LoginPage.vue';
import ClientView from '../views/Client.vue';
import PathView from '../views/Path';

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
            name : 'Client', 
            component : ClientView,
            meta : {
                requiresAuth: true,
            }
        },
        {
            path : '/rutas',
            name : 'Rutas', 
            component : PathView,
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