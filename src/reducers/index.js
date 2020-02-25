import { combineReducers } from 'redux';

// Reducers
import catState from '../reducers/cats-crud-reducer';
import catFormState from '../reducers/cat-forms-reducer';
import authState from '../reducers/auth-reducer';
import authFormState from '../reducers/auth-forms-reducer';

// Combine Reducers
var reducers = combineReducers({
    catState,
    catFormState,
    authState,
    authFormState
});

export default reducers;