import { address } from "../util/model";
import { API_KEY_MAPS } from "../util/constant";
import axios  from 'axios';

const state  = address();

const actions = {

    addPosition ({commit},position) {
        console.log(position);
        commit('setAddressPosition',position)
    },

    addressService ({commit},coordinates) {
        let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.position.lat},${coordinates.position.lng}&key=${API_KEY_MAPS}` ;
        axios.get(url).then( (response) => {
            if(response.status === 200) {
                commit('changeFulladdress',response.data.results[0]);
            }
        })
    },

    addressToCoordenada({commit},address) {
        let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&region&key=${API_KEY_MAPS}`;
        axios.get(url).then( (response) => {
            if(response.status === 200) {
                commit('setFullAddress',response.data.results[0]);
            }
        })
    }
}; 

const mutations = {

    addPosition (state,position) {
        state.position = { ...position }
    },

    changeFulladdress(state,data) {
       state.fulladdress = data.formatted_address;
    },

    setFullAddress(state,address) {
        state.position = address.geometry.location;
        state.markets.push({ 
            position : address.geometry.location
        });
    },
    
    setAddressPosition(state,position){
        state.markets.push(position);
    }

};

const getters = {

    getPosition : state => { 
        return state.position
    },

    getFullAddress : state => {
        return state.fulladdress;
    },

    getMarkets : state => {
        return state.markets;
    }
};

export const map = {
    namespaced : true,
    state,
    actions,
    mutations,
    getters
};

