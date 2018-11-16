import React from 'react';
import { connect } from 'react-redux';

import { deleteItem, updateItem } from '../store/actions/items';

export const GroceryItem = ({ item, deleteItemById, updateGroceryItem }) => (
  <div className="row">
    <div className="col s4">
      <h5
        style={{
          margin: '0 auto',
          ...(item.purchased && {
            textDecoration: 'line-through',
            color: '#a2a1a1',
          }),
        }}
      >
        {item.name}
      </h5>
    </div>
    <div className="col s4 v-center">
      <button
        className={`btn ${item.purchased ? 'flat-btn' : 'purchased'} buy-btn -btn`}
        type="button"
        onClick={() => updateGroceryItem(item)}
      >
        {item.purchased ? 'UNBUY' : 'BUY'}
      </button>
    </div>
    <div className="col s4 v-center">
      <button
        onClick={() => deleteItemById(item._id)}
        type="button"
        className="btn white del-btn -btn flat-btn"
      >
      x
      </button>
    </div>
  </div>
);

export default connect(null, dispatch => ({
  deleteItemById: id => dispatch(deleteItem(id)),
  updateGroceryItem: item => dispatch(updateItem(item)),
}))(GroceryItem);
