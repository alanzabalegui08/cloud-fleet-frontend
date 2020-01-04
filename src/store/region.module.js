const initialState = () => ({
    list: [],
    status: null,
    title: 'region',
});

const state = initialState();

const actions = {

    createRegion ( {commit}, region ) {
        commit('create', region);
    },

    removeRegion({commit}, region) {
        const indexRegion = state.list.findIndex( item => item.id === region.id);
        commit('remove', indexRegion);
    }
}

const mutations = {

    create (state, region) {
        state.list.push( {...region} );
    },

    remove (state, indexRegion) {
        state.list.splice(indexRegion, 1);
    }
}

const getters = {
    getRegions : state => {
        return state.list;
    }
}

export const region = {
    namespaced : true,
    state,
    getters,
    mutations,
    actions,
}