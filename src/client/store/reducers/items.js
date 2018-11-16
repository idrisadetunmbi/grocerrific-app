import * as types from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ITEMS_LOAD_SUCCESS:
      return [...action.data];
    case types.ITEM_CREATE_SUCCESS:
      return [action.data, ...state];
    case types.ITEM_DELETE_SUCCESS:
      return state.filter(item => item._id !== action.data);
    case types.ITEM_UPDATE_SUCCESS:
      return state.map((item) => {
        if (action.data._id === item._id) {
          return action.data;
        }
        return item;
      });
    default:
      return state;
  }
};
