const chai = require('chai')
const assert = chai.assert

const blackOrWhiteKey = require('./blackOrWhiteKey')

describe('blackOrWhiteKey', () => {
  assert.strictEqual(blackOrWhiteKey(1), 'white')
  assert.strictEqual(blackOrWhiteKey(5), 'black')
  assert.strictEqual(blackOrWhiteKey(12), 'black')
  assert.strictEqual(blackOrWhiteKey(42), 'white')
  assert.strictEqual(blackOrWhiteKey(88), 'white')
  assert.strictEqual(blackOrWhiteKey(89), 'white')
  assert.strictEqual(blackOrWhiteKey(92), 'white')
  assert.strictEqual(blackOrWhiteKey(100), 'black')
  assert.strictEqual(blackOrWhiteKey(111), 'white')
  assert.strictEqual(blackOrWhiteKey(200), 'black')
  assert.strictEqual(blackOrWhiteKey(2017), 'white')
})
