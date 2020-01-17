const initialState = () => ({
    list : [],

});

const state  = initialState();

const actions = {
    addTurn({commit},turn) {
        commit('addTurn', turn)
    },
    removeTurn({ state,commit }, turn) {
        const indexTurn = state.list.findIndex(item => item.id === turn.id);
        commit('removeTurn',indexTurn);0
    },
    clean ({commit} ) {
        commit('clearTurn');
    }
}

const  mutations = {
    addTurn(state,turn) {
        state.list.push({
            id : Math.floor(Math.random() * 100),
            name : turn.name,
            output : turn.output,
            input : turn.input
        });
    },
    removeTurn(state,indexTurn){
        state.list.splice(indexTurn,1);
    },
    clearTurn() {
        state.list = []
    }
};

const getters = {
    
    getTurns : state => { 
        return state.list
    },

    getTurnById () {
    },

    existsgTurn () {
        if(Array.isArray(state.list) && state.list.length){
            return true;
        }
        return false;
    }
}

export const turn = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
};
