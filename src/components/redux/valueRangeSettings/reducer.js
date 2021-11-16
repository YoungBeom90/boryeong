import { ADD } from "./types"

const initialState = {
    count1: 1,
    count2: 3,
}
const addReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                count1 : state.count1 + 1
            }
        default: return state
    }
}

export default addReducer