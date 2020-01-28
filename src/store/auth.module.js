import ApiService from '../service/api.service';
import { LOGIN, SET_AUTH, SET_ERROR } from './acctions.type';

const state  = {
    error : null,
    user : {},
    isAuthenticated : false,
}

const getters = {
    currentUser (state) {
        return state.user;
    },
    isAuthenticated (state) {
        return state.isAuthenticated;
    }
}

const actions = {
    [LOGIN](context,payload) {
        return new Promise ( resolve => {
            ApiService.post('user/login',{ data : payload})
            .then(({ data }) => {
                context.commit(SET_AUTH,data);
                resolve(data);
            }).catch(({response}) => {
                context(SET_ERROR,response.data.error)
            });
        });
    }
}

const mutations = {
    
    [SET_AUTH] (state, payload) {
        state.isAuthenticated = true;
        state.user = payload;
        state.error = {};
        /**
         * Agregar servicio de jwt 
         * JwtService.saveToken(payload.user.token) 
         */
    },

    [SET_ERROR] (state,error) {
        state.user = error;
    }
}

export default {
    state,
    actions,
    mutations,
    getters,
}