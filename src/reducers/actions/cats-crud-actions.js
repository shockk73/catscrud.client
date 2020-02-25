import * as types from '../../reducers/actions/action-types';



export function getCatsSuccess(cats) {
    return {
      type: types.GET_CATS_SUCCESS,
      cats
    };
}

export function getCatSuccess(cat) {
    return {
      type: types.GET_CAT_SUCCESS,
      cat
    };
}


export function deleteCatSuccess(id) {
    return {
      type: types.DELETE_CAT_SUCCESS,
      id
    };
}

export function updateCatSuccess(cat) {
    return {
      type: types.UPDATE_CAT_SUCCESS,
      cat
    };
}

export function catRequestSended() {
    return {
      type: types.CAT_REQUEST_SENDED,
    };
}

export function catRequestSending() {
    return {
      type: types.CAT_REQUEST_SENDING,
    };
}