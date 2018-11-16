import React from 'react';
import { shallow } from 'enzyme';

import { GroceryItems } from './GroceryItems';

describe('GroceryItems component', () => {
  test('renders without crashing', () => {
    shallow(<GroceryItems items={[]} />);
  });
});
