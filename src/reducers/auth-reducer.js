import * as types from '../reducers/actions/action-types';

const initialState = {
  jwtToken: null,
  userName: null,
  isLoading: false,
  isReady: false
};

const authReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.AUTH_USER_SUCCESS:
        return {  ...state, jwtToken: action.jwtToken, userName: action.userName  }
    case types.AUTH_REQUEST_SENDING:
        return {  ...state, isLoading: true  }
    case types.AUTH_REQUEST_SENDED:
        return {  ...state, isLoading: false  }
    case types.AUTH_TOKEN_READY:
        return {  ...state, isReady: true  }

  }

  return state;

}

/**
 * State of auth user credentions
 */
export default authReducer;