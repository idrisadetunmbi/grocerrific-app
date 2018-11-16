import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import './index.css';
import store from '../store';
import { loadItems } from '../store/actions/items';
import GroceryItems from './GroceryItems';
import AddItem from './AddItem';
import Error from './ErrorToaster';

store.dispatch(loadItems());

export default hot(module)(() => (
  <Provider store={store}>
    <Fragment>
      <Error />
      <h1>Grocery Listify</h1>
      <GroceryItems />
      <AddItem />
    </Fragment>
  </Provider>
));
