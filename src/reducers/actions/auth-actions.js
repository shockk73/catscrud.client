import * as types from '../../reducers/actions/action-types';

export function authUserSuccess(cred) {
  return {
    type: types.AUTH_USER_SUCCESS,
    jwtToken: cred.jwtToken,
    userName: cred.userName
  };
}

export function authRequestSending() {
    return {
      type: types.AUTH_REQUEST_SENDING,
    };
}

export function authRequestSended() {
    return {
      type: types.AUTH_REQUEST_SENDED,
    };
}

export function authTokenReady() {
    return {
      type: types.AUTH_TOKEN_READY,
    };
}