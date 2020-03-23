import { getMessage } from "./utils"

describe('getMessage', () => {
  it('Returns a string', () => {
    expect(getMessage()).toBe('Hello world');
  })
})
