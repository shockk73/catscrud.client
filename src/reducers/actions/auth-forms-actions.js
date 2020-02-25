import * as types from '../../reducers/actions/action-types';

export function authParamSet(cred) {
    return {
      type: types.AUTH_PARAM_SET,
      username: cred.username,
      password : cred.password
    };
}

