import { StringToHSL, HSLToHex } from "../util/SettingLayout";

const initialState = () => ({
    list: [],
    status: null,
    title: 'Clientes',
    proccess: false,
});


const state = initialState();

const actions = {
    createClient({
        commit
    }, client) {
        commit('createClient', client)
    },
    removeClient({
        commit
    }, client) {
        const indexClient = state.list.findIndex(
            item => item.id === client.id
        );
        commit('remove', indexClient);
    }
}

const mutations = {

    createClient(state, client) {
        var cliente = {...client} ; 
        cliente.primarycolor  = HSLToHex ( StringToHSL(cliente.primarycolor) );
        cliente.backgroundcolor  = HSLToHex ( StringToHSL(cliente.backgroundcolor) );
        state.list.push(cliente);
    },

    remove(state, indexClient) {
        state.list.splice(indexClient, 1);
    }
}

const getters = {
    getClients: state => {
        return state.list
    }
}

export const client = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}