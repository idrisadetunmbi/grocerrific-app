import React from 'react';
import { shallow, mount } from 'enzyme';

import { GroceryItem } from './GroceryItem';

describe('GroceryItem component', () => {
  test('renders without crashing', () => {
    shallow(<GroceryItem item={{}} />);
  });

  test('calls [updateGroceryItem] props function when buy button is clicked', () => {
    const props = {
      updateGroceryItem: jest.fn(),
      item: {},
    };

    const wrapper = mount(<GroceryItem {...props} />);
    const buyBtn = wrapper.find('.buy-btn');
    expect(buyBtn.text()).toEqual('BUY');
    buyBtn.simulate('click');
    expect(props.updateGroceryItem).toHaveBeenCalledWith(props.item);
  });

  test('calls [deleteItemById] props function when delete button is clicked', () => {
    const props = {
      deleteItemById: jest.fn(),
      item: { _id: 1 },
    };

    const wrapper = mount(<GroceryItem {...props} />);
    const delBtn = wrapper.find('.del-btn');
    delBtn.simulate('click');
    expect(props.deleteItemById).toHaveBeenCalledWith(props.item._id);
  });
});
