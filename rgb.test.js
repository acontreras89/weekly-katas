const chai = require('chai')
const assert = chai.assert

const rgb = require('./rgb')

describe('rgb', () => {
  it('Basic Tests', () => {
    assert.strictEqual(rgb(0, 0, 0), '000000')
    assert.strictEqual(rgb(0, 0, -20), '000000')
    assert.strictEqual(rgb(300, 255, 255), 'FFFFFF')
    assert.strictEqual(rgb(173, 255, 47), 'ADFF2F')
  })
})
