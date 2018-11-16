import error from './error';
import * as types from '../actions/types';

describe('Error reducer', () => {
  test('returns the expected state when an error is dispatched', () => {
    const newState = error('', {
      type: types.ITEM_ACTION_FAILED,
      data: 'new error',
    });
    expect(newState).toEqual('new error');
  });

  test('returns the expected state when clear error is dispatched', () => {
    const newState = error('existing error', {
      type: types.CLEAR_ERROR,
    });
    expect(newState).toEqual('');
  });
});
