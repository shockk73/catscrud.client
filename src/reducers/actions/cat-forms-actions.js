import * as types from '../../reducers/actions/action-types';


/**
 * Action that should set cat name and age for update to catFormState
 */
export function updateCatParamSet(cat) {
    return {
      type: types.UPDATE_CAT_PARAM_SET,
      name: cat.name,
      age: parseInt(cat.age)
    };
}

/**
 * Action that should set cat name and age for create to catFormState
 */
export function createCatParamSet(cat) {
    return {
      type: types.CREATE_CAT_PARAM_SET,
      name: cat.name,
      age: parseInt(cat.age)
    };
}

