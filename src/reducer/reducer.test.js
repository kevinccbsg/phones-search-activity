import reducer, { initialState } from './index';
import { GET_PHONES } from './../actions/index';
import mockData from '../../mockData';

describe('reducer', () => {
  it('returns initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('Pending action', () => {
    expect(reducer(initialState, {
      type: `${GET_PHONES}_PENDING`,
    })).toEqual(initialState);
  });

  it('Fullfilled action', () => {
    expect(reducer(initialState, {
      type: `${GET_PHONES}_FULFILLED`,
      payload: {
        data: {
          data: mockData,
        }
      }
    }))
    .toEqual({
      loading: false,
      phones: mockData,
      error: false,
    });
  });

  it('Rejected action', () => {
    expect(reducer(initialState, {
      type: `${GET_PHONES}_REJECTED`,
    }))
    .toEqual({
      loading: false,
      phones: [],
      error: true,
    });
  });
});
