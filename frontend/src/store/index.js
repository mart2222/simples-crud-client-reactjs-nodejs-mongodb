import { createStore } from 'redux';

import rootReducer from './ducks';


const createAppropriateStore = createStore;

const store = createAppropriateStore(rootReducer);

export default store;
