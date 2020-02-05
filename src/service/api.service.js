import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from '../common/config';

const ApiService = {
    
    init() {
        Vue.use(VueAxios,axios);
        Vue.axios.defaults.baseURL = API_URL;
    },

    setHeader() {
        Vue.axios.defaults.headers.common[
            "Authorization"
        ] = `Token`;
    },

    get( resource, index = "" ) {
        return Vue.axios.get(`${resource}/${index}`).catch( 
            error => {
                throw new Error(`[KLAY] API Service  ${error}` )
            }
        )
    },

    post( resource, datas ) {
        return Vue.axios.post(`${resource}`,datas);
    }

}

export default ApiService;