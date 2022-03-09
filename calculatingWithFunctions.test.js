const chai = require('chai')
const assert = chai.assert

const {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
} = require('./calculatingWithFunctions')

describe('calculatingWithFunctions', () => {
  it('test', () => {
    assert.strictEqual(five(times(five())), 25)
    assert.strictEqual(seven(times(five())), 35)
    assert.strictEqual(four(plus(nine())), 13)
    assert.strictEqual(eight(minus(three())), 5)
    assert.strictEqual(six(dividedBy(two())), 3)
  })
})
