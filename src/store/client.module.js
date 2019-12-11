// import router from '../router';

const initialState = () => ({
    clientList: [{
        name : 'Tiger Nixon',
        area : 'System Architect',
        text_color : '#FF000',
        backgroud_color :'#FFCC00'
    }],
    status : null,
    title  : 'Clientes',
    proccess : false,
});


const state  =  initialState();

const actions = {
    createClient({commit },client) {
        commit('createClient', client)
    },
}

const mutations = {

    createClient (state,client) {
        state.clientList.push({name : client.name,area : 'area',text_color : client.text_color,backgroud_color : client.backgroud_color});
    }
}

const getters = {
    getClients : state => {
        return state.clientList
    }
}

export const client = {
    namespaced : true,
    state,
    getters,
    mutations,
    actions
}