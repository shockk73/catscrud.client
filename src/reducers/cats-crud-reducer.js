import * as types from '../reducers/actions/action-types';

const initialState = {
   cats: [],
   cat: null,
   isLoading: false
};

const catReducer = function(state = initialState, action) {


  switch(action.type) {

    case types.CAT_GETS[types.REQUEST]:
        case types.CAT_GET[types.REQUEST]:
            case types.CAT_UPDATE[types.REQUEST]:
                case types.CAT_DELETE[types.REQUEST]:
                    case types.CAT_CREATE[types.REQUEST]:
                        return {  ...state, isLoading: true  }
    case types.CAT_GETS[types.SUCCESS]:
        return {  ...state, cats: action.cats, isLoading: false  }
    case types.CAT_GET[types.SUCCESS]:
        return {  ...state, cat: action.cat, isLoading: false  }
    case types.CAT_DELETE[types.SUCCESS]:
        return {  ...state, cats: [...state.cats.filter( cat => cat.id !== action.id )], isLoading: false  }
    case types.CAT_UPDATE[types.SUCCESS]:
        return { ...state, cat: action.cat, isLoading: false }
    case types.CAT_CREATE[types.SUCCESS]:
        return {  ...state, isLoading: false  }
  }

  return state;

}
/**
 * State of database cat object
 */
export default catReducer;