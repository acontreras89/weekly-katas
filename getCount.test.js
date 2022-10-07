const { assert } = require('chai')

const getCount = require('./getCount')

describe('getCount', function () {
  it("should return 5 for 'abracadabra'", function () {
    assert.strictEqual(getCount('abracadabra'), 5)
  })
})
