import * as types from '../../reducers/actions/action-types';


/**
 * Action that should set auth creds to authState
 */
export function authUserSuccess(cred) {
  return {
    type: types.AUTH_USER_SUCCESS,
    ...cred
  };
}

/**
 * Action that should set authState as fetching 
 */
export function authRequestSending() {
    return {
      type: types.AUTH_REQUEST_SENDING,
    };
}

/**
 * Action that should set authState as fetched
 */
export function authRequestSended() {
    return {
      type: types.AUTH_REQUEST_SENDED,
    };
}

/**
 * Action that should set authState as ready for using 
 */
export function authTokenReady() {
    return {
      type: types.AUTH_TOKEN_READY,
    };
}