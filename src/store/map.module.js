const initialState = () => ({
    list : [],
    position : {}
});

const state  = initialState();

const actions = {
    addPosition ({commit},position) {
        commit('addPosition',position)
    }
}; 

const mutations = {
    addPosition (state,position){
        state.position = {...position}
    }
};

const getters = {

    getPosition : state => { 
        return state.position
    }
};

export const map = {
    namespaced : true,
    state,
    actions,
    mutations,
    getters
};