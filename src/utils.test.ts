import { getMessage } from './utils';

describe('getMessage', () => {
  it('Returns a string', () => {
    expect(getMessage('world')).toBe('Hello world');
  });
});
