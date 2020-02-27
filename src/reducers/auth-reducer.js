import * as types from '../reducers/actions/action-types';
import { removeFromLocalSorage, setToLocalSorage } from '../hooks/auth.hook';

const initialState = {
  jwtToken: null,
  userName: null,
  isLoading: false,
  isReady: false
};

const authReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.TOKEN_GET[types.SUCCESS]:
        setToLocalSorage(action.jwtToken, action.userName)
        return {  ...state, jwtToken: action.jwtToken, userName: action.userName, isLoading: false  }
    case types.TOKEN_REMOVE:
        removeFromLocalSorage()
        return {  ...state, jwtToken: null, userName: null  }
    case types.TOKEN_GET[types.REQUEST]:
        return {  ...state, isLoading: true  }
    case types.TOKEN_READY:
        return {  ...state, isReady: true  }

  }

  return state;

}

/**
 * State of auth user credentions
 */
export default authReducer;