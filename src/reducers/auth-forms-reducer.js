import * as types from '../reducers/actions/action-types';

const initialState = {
   username: "",
   password: "",
};

const authFormReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.UPDATE_AUTH_FORM:
        return {  ...state, username: action.username, password: action.password  }

  }

  return state;

}
/**
 * State of user credentions for auth
 */
export default authFormReducer;