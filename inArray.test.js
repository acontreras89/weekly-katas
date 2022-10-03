const chai = require('chai')
const assert = chai.assert

const inArray = require('./inArray')

describe('inArray', () => {
  it('test', () => {
    a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']

    a1 = ['xyz', 'live', 'strong']
    assert.deepStrictEqual(inArray(a1, a2), ['live', 'strong'])
    a1 = ['live', 'strong', 'arp']
    assert.deepStrictEqual(inArray(a1, a2), ['arp', 'live', 'strong'])
    a1 = ['tarp', 'mice', 'bull']
    assert.deepStrictEqual(inArray(a1, a2), [])
  })
})
