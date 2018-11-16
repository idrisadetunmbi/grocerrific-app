import React from 'react';
import { shallow, mount } from 'enzyme';

import { AddItem } from './AddItem';

describe('AddItem component', () => {
  test('renders without crashing', () => {
    shallow(<AddItem />);
  });

  test('renders submit button with value "ADD ITEM"', () => {
    const wrapper = mount(<AddItem />);
    const submitBtn = wrapper.find('input[type="submit"]');
    expect(submitBtn.props().value).toEqual('ADD ITEM');
  });

  test('onChange set input field value in state', () => {
    const wrapper = mount(<AddItem items={[]} />);
    const formFieldItemName = wrapper.find('input[type="text"]');
    expect(formFieldItemName.props().value).toEqual(wrapper.state().item.name);
    formFieldItemName.simulate('change', { target: { value: 'a' } });
    expect(wrapper.state().item.name).toEqual('a');
  });

  test('form submission calls the [addItem] prop function', () => {
    const addItem = jest.fn();

    const wrapper = mount(<AddItem items={[]} addItem={addItem} />);
    const submitBtn = wrapper.find('form');
    submitBtn.simulate('submit');
    expect(addItem).toHaveBeenCalled();
  });
});
