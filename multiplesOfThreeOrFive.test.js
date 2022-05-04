const chai = require('chai')
const assert = chai.assert

const solution = require('./multiplesOfThreeOrFive')

function test(n, expected) {
  let actual = solution(n)
  it(`Expected ${expected}, got ${actual}`, () => {
    assert.strictEqual(actual, expected)
  })
}

describe('multiplesOfThreeOrFive', function () {
  test(10, 23)
})
