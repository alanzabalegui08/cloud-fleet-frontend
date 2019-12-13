const initialState = () => ({
    list : [],

});


const state  = initialState();

const actions = {
    addTurn({commit},turn) {
        commit('addTurn', turn)
    },
    removeTurn({ state,commit }, turn) {
        console.log(state.list);
        const indexTurn = state.list.findIndex(item => item.id === turn.id);
        commit('removeTurn',indexTurn);0
    }    

}

const  mutations = {
    addTurn(state,turn){
        state.list.push({
            id : Math.floor(Math.random() * 100),
            name : turn.name,
            output : turn.output,
            input : turn.input
        });
    },
    removeTurn(state,indexTurn){
        state.list.splice(indexTurn,1);
    }
};

const getters = {
    
    getTurns : state => { 
        return state.list
    },
    getTurnById(){
    }
}


export const turn = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
};