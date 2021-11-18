import { ADD_VALUE, REMOVE_VALUE, INIT_DATA } from "./types"

const initialState = {
    data: [],
    value : 15
};

const controlValueReducer = (state=initialState, action) => {

    console.log("action ==============>>> ",action);

    switch (action.type) {
        case ADD_VALUE:
            return {
                ...state,
                value : state.value + 1
            }
        case REMOVE_VALUE: 
            return {
                ...state,
                value : state.value - 1
            }
        case INIT_DATA :
            return {
                ...state,
                data : action.payload
            }
        default: return state
    }
}

export default controlValueReducer