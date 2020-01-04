
const initialState = () => ({
    list : [],
    status : null,
    title : 'Supervisor',
});

const state = initialState();

const actions = {
    createSupervisor({commit}, supervisor) {
        commit('create', supervisor);
    },

    removeSupervisor({commit}, supervisor) {
        const indexSuper = state.list.findIndex( item => item.id === supervisor.id);
        commit('remove', indexSuper);
    }
}

const mutations = {
    create(state,supervisor) {
        state.list.push( {...supervisor} );
    },

    remove(state,indexSuper) {
        state.list.splice(indexSuper, 1);
    }
}

const  getters = {
    getSupervisors : state => {
        return state.list;
    }
}

export const supervisor = {
    namespaced : true,
    state,
    getters,
    mutations,
    actions
}