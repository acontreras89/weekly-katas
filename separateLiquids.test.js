const { assert } = require('chai')

const separateLiquids = require('./separateLiquids')

describe('separateLiquids', function () {
  it('Should be able to sort 3 liquids', function () {
    assert.deepEqual(
      separateLiquids([
        ['H', 'H', 'W', 'O'],
        ['W', 'W', 'O', 'W'],
        ['H', 'H', 'O', 'O'],
      ]),
      [
        ['O', 'O', 'O', 'O'],
        ['W', 'W', 'W', 'W'],
        ['H', 'H', 'H', 'H'],
      ],
      ''
    )
  })
  it('Should be able to handle 4 liquids', function () {
    assert.deepEqual(
      separateLiquids([
        ['A', 'A', 'O', 'H'],
        ['A', 'H', 'W', 'O'],
        ['W', 'W', 'A', 'W'],
        ['H', 'H', 'O', 'O'],
      ]),
      [
        ['O', 'O', 'O', 'O'],
        ['A', 'A', 'A', 'A'],
        ['W', 'W', 'W', 'W'],
        ['H', 'H', 'H', 'H'],
      ],
      ''
    )
  })
  it('Should be able to handle one row', function () {
    assert.deepEqual(
      separateLiquids([['A', 'H', 'W', 'O']]),
      [['O', 'A', 'W', 'H']],
      ''
    )
  })
  it('Should be able to handle one column', () => {
    assert.deepEqual(
      separateLiquids([['A'], ['H'], ['W'], ['O']]),
      [['O'], ['A'], ['W'], ['H']],
      ''
    )
  })
  it('Should be able to handle empty array', function () {
    assert.deepEqual(
      separateLiquids([]),
      [],
      'Empty array should be returned if given.'
    )
  })
})
