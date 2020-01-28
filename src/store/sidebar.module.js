const state = {
    error : null,
    isShow : false,
    isMovil :  false,
    attribute : 'is-collapsed',
}

const getters = {
    showSidebar(state) {
        return state.isShow;
    }
}

const actions = {

}

const mutations = {

}


export const sidebar = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}