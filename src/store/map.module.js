const initialState = () => ({
    list : [],
    coordenadas : {}
});


const state  = initialState();

const getters = {

    getCordenadas : state => { 
        return state.coordenadas
    }
}



export const map = {
    namespaced : true,
    state,
    getters
};