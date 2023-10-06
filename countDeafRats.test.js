const { assert } = require('chai')

const countDeafRats = require('./countDeafRats')

describe('countDeafRats', function () {
  it('ex1', function () {
    assert.strictEqual(countDeafRats('~O~O~O~O P'), 0)
  })

  it('ex2', function () {
    assert.strictEqual(countDeafRats('P O~ O~ ~O O~'), 1)
  })

  it('ex3', function () {
    assert.strictEqual(countDeafRats('~O~O~O~OP~O~OO~'), 2)
  })

  it('rats', function () {
    assert.strictEqual(countDeafRats('O~~OO~~OO~~OO~P~OO~~OO~~OO~~O'), 8)
    assert.strictEqual(countDeafRats('O~~OO~~OO~~OO~ P~OO~~OO~~OO~~O'), 8)
  })
})
