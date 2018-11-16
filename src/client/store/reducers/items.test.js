import items from './items';
import * as types from '../actions/types';

describe('Items reducer', () => {
  test('returns the expected state when a new item is created', () => {
    const item = { name: 'Waffles' };
    const newState = items([], {
      type: types.ITEM_CREATE_SUCCESS,
      data: item,
    });
    expect(newState.length).toEqual(1);
    expect(newState[0].name).toEqual(item.name);
  });

  test('returns the expected state when an item is deleted', () => {
    const item = { name: 'Waffles', _id: 1 };
    const newState = items([item], {
      type: types.ITEM_DELETE_SUCCESS,
      data: 1,
    });
    expect(newState.length).toEqual(0);
  });

  test('returns the expected state when an item is updated', () => {
    const item = { name: 'Waffles', _id: 1 };
    const newItem = { name: 'Ice cream', _id: 1 };
    const newState = items([item], {
      type: types.ITEM_UPDATE_SUCCESS,
      data: newItem,
    });
    expect(newState.length).toEqual(1);
    expect(newState[0].name).toEqual(newItem.name);
  });
});
