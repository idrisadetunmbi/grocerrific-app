import axios from 'axios';
import * as types from './types';

export const loadItems = () => async (dispatch) => {
  let items;
  try {
    items = (await axios.get('/api/items')).data.data;
  } catch (error) {
    return;
  }
  dispatch({
    type: types.ITEMS_LOAD_SUCCESS,
    data: items,
  });
};

export const addItem = item => async (dispatch) => {
  let newItem;
  try {
    newItem = (await axios.post('/api/items', item)).data.data;
  } catch (error) {
    dispatch({
      type: types.ITEM_ACTION_FAILED,
      data: error.response.data.error,
    });
    return;
  }
  dispatch({
    type: types.ITEM_CREATE_SUCCESS,
    data: newItem,
  });
};

export const deleteItem = id => async (dispatch) => {
  try {
    await axios.delete(`/api/items/${id}`);
  } catch (error) {
    console.log(error);
    return;
  }
  dispatch({
    type: types.ITEM_DELETE_SUCCESS,
    data: id,
  });
};

export const updateItem = item => async (dispatch) => {
  let updatedItem;
  try {
    updatedItem = (await axios
      .put(`/api/items/${item._id}`, { purchased: !item.purchased })).data.data;
  } catch (error) {
    console.log(error);
    return;
  }
  dispatch({
    type: types.ITEM_UPDATE_SUCCESS,
    data: updatedItem,
  });
};

export const todo = () => {};
