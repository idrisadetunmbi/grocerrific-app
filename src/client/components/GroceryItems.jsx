import React from 'react';
import { connect } from 'react-redux';

import GroceryItem from './GroceryItem';

export const GroceryItems = ({ items }) => (
  <div>
    {
      items.map(item => <GroceryItem item={item} key={item._id} />)
    }
  </div>
);

export default connect(state => ({ items: state.items }))(GroceryItems);
