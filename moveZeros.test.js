const chai = require('chai')
const assert = chai.assert

const moveZeros = require('./moveZeros')

describe('moveZeros', () => {
  it('test', () => {
    assert.deepEqual(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [
      1,
      2,
      1,
      1,
      3,
      1,
      0,
      0,
      0,
      0,
    ])
  })
})
