import { ADD_VALUE, REMOVE_VALUE, INIT_FLOW_SET_DATA, INIT_PRESS_SET_DATA } from "./types"

const initialState = {
    flow : [],
    press : [],
    depth : []
};

const controlValueReducer = (state=initialState, action) => {

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
        case INIT_FLOW_SET_DATA :
            return {
                ...state,
                flow : action.payload
            }
            
        case INIT_PRESS_SET_DATA :
            return {
                ...state,
                press : action.payload
            }
        default: return state
    }
}

export default controlValueReducer