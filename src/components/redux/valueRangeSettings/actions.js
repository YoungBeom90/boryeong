import { INIT_DEPTH_SET_DATA, INIT_FLOW_SET_DATA, INIT_PRESS_SET_DATA } from "./types"
import axios from "axios";

export const initDepthSetData = async () => {
    const initDepthSetData = await axios.get('/api/settings?type=LEVEL');

    return {
        type : INIT_DEPTH_SET_DATA,
        payload : initDepthSetData.data
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

export const initDepthSetDataThunk = () => (dispatch) => {
    // const initDepthSetData = await axios.get('/api/settings?type=LEVEL');
    const data = [
        {warningVal : 1, dangerVal : 2},
        {warningVal : 3, dangerVal : 4}
    ]
    setTimeout(() => dispatch({type: INIT_DEPTH_SET_DATA, payload: data}), 5000)
}