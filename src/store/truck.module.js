
const initialState = () => ({
    list : [],
    status : null,
    title : 'Unidad',
});

const state = initialState ();

const actions = {
    createTruck ({commit}, truck) {
        commit('create', truck);
    },

    removeTruck ({commit}, truck) {
        const indexTruck = state.list.findIndex(item => item.id === truck.id);
        commit('remove',indexTruck);
    }
}

const mutations = {
    
    create (state, truck) {
        state.list.push({ ...truck});
    },

    remove (state,indexTruck) {
        state.list.splice(indexTruck, 1);
    }
}

const getters = {
    getTrucks : state => {
        return state.list;
    }
}

export const truck = {
    namespaced : true,
    state,
    getters,
    mutations,
    actions,
}