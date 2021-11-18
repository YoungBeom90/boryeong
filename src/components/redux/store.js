import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import controlValueReducer from './valueRangeSettings/reducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(controlValueReducer, composedEnhancer);
export default store;