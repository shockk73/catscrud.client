import * as types from '../../reducers/actions/action-types';



export function updateCatParamSet(cat) {
    return {
      type: types.UPDATE_CAT_PARAM_SET,
      name: cat.name,
      age: parseInt(cat.age)
    };
}

export function createCatParamSet(cat) {
    return {
      type: types.CREATE_CAT_PARAM_SET,
      name: cat.name,
      age: parseInt(cat.age)
    };
}

