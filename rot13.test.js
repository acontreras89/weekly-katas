const chai = require('chai')
const assert = chai.assert

const rot13 = require('./rot13')

describe('rot13', function () {
  it('test', function () {
    assert.strictEqual(rot13('test'), 'grfg')
    assert.strictEqual(rot13('Test'), 'Grfg')
  })
})
