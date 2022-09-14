const { assert } = require('chai')

const countBits = require('./countBits')

describe('countBits', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(countBits(0), 0)
    assert.strictEqual(countBits(4), 1)
    assert.strictEqual(countBits(7), 3)
    assert.strictEqual(countBits(9), 2)
    assert.strictEqual(countBits(10), 2)
  })
})
