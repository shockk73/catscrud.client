import * as types from '../reducers/actions/action-types';

const initialState = {
   u_cat: 
   {
    name: "",
    age: 0
   },
   c_cat:
   {
    name: "",
    age: 0
   }
};

const catFormReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.UPDATE_CAT_CREATING_FORM:
        return {  ...state, c_cat: { name: action.name, age: action.age } }
    case types.UPDATE_CAT_UPDATING_FORM:
        return {  ...state, u_cat: { name: action.name, age: action.age }  }
  }

  return state;

}

/**
 * State of input cat data
 */
export default catFormReducer;