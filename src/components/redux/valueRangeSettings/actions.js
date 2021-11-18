import { ADD_VALUE, REMOVE_VALUE, INIT_DATA, UPDATE_DATA } from "./types"
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

export const initData = async () => {
    const initData = await axios.get('http://localhost:8083/api/settings');
    return {
        type : INIT_DATA,
        payload : initData.data
    }
}