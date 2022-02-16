const chai = require('chai')
const assert = chai.assert

const dblLinear = require('./dblLinear')

describe('dblLinear', () => {
  it('Basic tests', () => {
    assert.strictEqual(dblLinear(10), 22)
    assert.strictEqual(dblLinear(20), 57)
    assert.strictEqual(dblLinear(30), 91)
    assert.strictEqual(dblLinear(50), 175)
    assert.strictEqual(dblLinear(100), 447)
  })
})
