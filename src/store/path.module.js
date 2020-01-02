const initialState = () => ({
    title: 'Rutas',
    list: [],
    status: null,
    loading: false,
});

const state = initialState();

const actions = {

    createPath({
        commit
    }, path) {
        console.log(path);
        commit('create', path);
    },

    removePath({
        commit
    }, path) {
        const indexPath = state.list.findIndex(
            item => item.id === path.id
        );
        commit('remove', indexPath)
    }
}

const mutations = {

    create(state, path) {
        state.list.push({
            ...path
        });
    },

    remove(indexPath) {
        state.list.splice(indexPath, 1);
    }
}

const getters = {
    getPaths: state => {
        return state.list;
    }
}

export const path = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}