//import {userService} from '../service';
import { router } from '../router';

// estado inicial del modulo
const initialState = () => ({
    status : {loggedIn : false},
    user : null,
    saludo : 'klay'
});

// se crea la inicializacion del state 
const state = initialState();

const actions = {
    login ({commit},user) {
        //const user_ = userService.login(user.username,user.password);
        //console.warn (user_);
        commit('loginSuccess',user);
        router.push('/');
    },
    logout () {
    } ,
    resetState ({commit}) {
        commit('stateReset');
        router.push('/login')
    }    
};

const mutations = {

    loginSuccess(state,user){
        state.status = {loggedIn : true};
        state.user = user;
    },

    stateReset(state) {
        const newstate = initialState();
        Object.keys(newstate).forEach( key => {
            state[key] = newstate[key];
        });
    },

};

const getters = {
    isLoggedIn : state => {
        return state.status.loggedIn;
    }
};


export const account = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};