import { createStore } from 'redux';
import addReducer from './valueRangeSettings/reducer';

const store = createStore(addReducer);

export default store;