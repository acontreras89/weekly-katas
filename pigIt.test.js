const chai = require('chai')
const assert = chai.assert

const pigIt = require('./pigIt')

describe('pigIt', () => {
  it('test', () => {
    assert.strictEqual(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
    assert.strictEqual(pigIt('This is my string'), 'hisTay siay ymay tringsay')
  })
})
