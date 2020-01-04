const initialState = () => ({
    list: [],
    status: null,
    title: 'Banner',
});

const state = initialState();

const actions = {

    createBanner ( {commit}, banner ) {
        commit('create', banner);
    },

    removeBanner({commit}, banner) {
        const indexBanner = state.list.findIndex( item => item.id === banner.id);
        commit('remove', indexBanner);
    }
}

const mutations = {

    create (state, banner) {
        state.list.push( {...banner} );
    },

    remove (state, indexBanner) {
        state.list.splice(indexBanner, 1);
    }
}

const getters = {
    getRegions: state => {
        return state.list;
    }
}

export const banner = {
    namespaced : true,
    state,
    getters,
    mutations,
    actions,
}