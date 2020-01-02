const initialState = () => ({
    list: [],
    status: null,
    title: 'Operadores',
});

const state = initialState();

const actions = {

    createDriver({
        commit
    }, driver) {
        commit('create', driver);
    },

    removeDriver({
        commit
    }, driver) {
        const indexDriver = state.list.findIndex(
            item => item.id === driver.id
        );
        commit('remove', indexDriver);
    }
}

const mutations = {

    create(state, driver) {
        state.list.push({
            ...driver
        });
    },

    remove(state, indexDriver) {
        state.list.splice(indexDriver, 1);
    }
}

const getters = {
    getDrivers: state => {
        return state.list;
    }
}

export const driver = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}