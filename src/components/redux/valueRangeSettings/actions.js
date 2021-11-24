import { ADD_VALUE, REMOVE_VALUE, INIT_FLOW_SET_DATA, INIT_PRESS_SET_DATA } from "./types"
import axios from "axios";

export const addValue =() => {
    return {
        type : ADD_VALUE
    }
}

export const removeValue = () => {
    return {
        type : REMOVE_VALUE
    }
}

export const initFlowSetData = async () => {
    const initFlowSetData = await axios.get('/api/settings?type=FLOW');
    
    return {
        type : INIT_FLOW_SET_DATA,
        payload : initFlowSetData.data
    }
}

export const initPressSetData = async () => {
    const initPressSetData = await axios.get('/api/settings?type=PRESS');
    
    return {
        type : INIT_PRESS_SET_DATA,
        payload : initPressSetData.data
    }
}