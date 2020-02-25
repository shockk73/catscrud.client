import * as types from '../reducers/actions/action-types';

const initialState = {
   cats: [],
   cat: null,
   isLoading: false
};

const catReducer = function(state = initialState, action) {


  switch(action.type) {

    case types.GET_CATS_SUCCESS:
        return {  ...state, cats: action.cats  }
    case types.GET_CAT_SUCCESS:
        return {  ...state, cat: action.cat  }
    case types.DELETE_CAT_SUCCESS:
        return {  ...state, cats: [...state.cats.filter( cat => cat.id !== action.id )]  }
    case types.UPDATE_CAT_SUCCESS:
        return { ...state, cat: action.cat }
    case types.CAT_REQUEST_SENDING:
        return {  ...state, isLoading: true  }
    case types.CAT_REQUEST_SENDED:
        return {  ...state, isLoading: false  }
  }

  return state;

}

export default catReducer;