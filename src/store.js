import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducers,
   applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

/**
 * Redux default store with combined reducers and saga
 */
export default store;