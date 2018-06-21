import * as actions from './index';

describe('actions', () => {
  it('action to get phones', () => {
    const expected = { type: actions.GET_PHONES };
    expect(actions.getPhones().type).toEqual(expected.type);
  });
});

