const initialState = () => ({
    list : [],

});


const state  = initialState();

const actions = {
    addTurn({commit},turn) {
        commit('addTurn', turn)
    },
    removeTurn({ state, commit }, turn) {
        const turn = state.list.findIndex(item => item.name === turn.name)
        console.log(turn);
        
    }    

}

const  mutations = {
    addTurn(state,turn){
        state.list.push({
            name : turn.name,
            output : turn.output,
            input : turn.input
        });
    },

};

const getters = {
    getTurns : state => { 
        return state.list
    }
}


export const turn = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
};