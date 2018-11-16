import * as types from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case types.ITEM_ACTION_FAILED:
      return action.data;
    case types.CLEAR_ERROR:
      return '';
    default:
      return state;
  }
};
