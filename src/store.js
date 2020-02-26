import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

/**
 * Redux default store with combined reducers
 */
export default store;