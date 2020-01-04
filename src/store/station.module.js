const initialState = () => ({
    list: [],
    status: null,
    title: 'Estacion',
});

const state = initialState();

const actions = {
    
    createStation ( {commit}, station ) {
        commit('create',station);
    },

    removeStation( {commit}, station) {
        const indexStation = state.list.findIndex( item => item.id === station.id);
        commit('remove', indexStation);
    }
}

const mutations = {

    create (state, station) {
        state.list.push( {...station} );
    },

    remove (state, indexStation) {
        state.list.splice(indexStation, 1);
    },
}

const getters = {

    getStations : state => {
        return state.list;
    },
}

export const station = {
    namespaced : true,
    state,
    getters,
    mutations,
    actions,
}