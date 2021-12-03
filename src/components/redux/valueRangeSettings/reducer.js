import { INIT_DEPTH_SET_DATA, INIT_FLOW_SET_DATA, INIT_PRESS_SET_DATA } from "./types"

const initialState = {
    depth : [{},{}],
    flow : [],
    press : [],
};

const controlValueReducer = (state=initialState, action) => {

    switch (action.type) {
        case INIT_DEPTH_SET_DATA:
            return {
                ...state,
                depth : action.payload
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