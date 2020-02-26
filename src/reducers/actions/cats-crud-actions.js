import * as types from '../../reducers/actions/action-types';


/**
 * Action that should set array of cat database model to catState
 */
export function getCatsSuccess(cats) {
    return {
      type: types.GET_CATS_SUCCESS,
      cats
    };
}

/**
 * Action that should set cat database model to catState
 */
export function getCatSuccess(cat) {
    return {
      type: types.GET_CAT_SUCCESS,
      cat
    };
}

/**
 * Action that should remove cat by id from array of cat database model in catState
 */
export function deleteCatSuccess(id) {
    return {
      type: types.DELETE_CAT_SUCCESS,
      id
    };
}

/**
 * Action that should update cat in array of cat database model in catState
 */
export function updateCatSuccess(cat) {
    return {
      type: types.UPDATE_CAT_SUCCESS,
      cat
    };
}

/**
 * Action that should set catState as fetched
 */
export function catRequestSended() {
    return {
      type: types.CAT_REQUEST_SENDED,
    };
}

/**
 * Action that should set catState as fetching
 */
export function catRequestSending() {
    return {
      type: types.CAT_REQUEST_SENDING,
    };
}