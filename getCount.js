const fn = require('./fn')

const isVowel = ch =>
  ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'

const getCount = fn.pipe(fn.split(''), fn.filter(isVowel), fn.length)

// const getCount = str => str.match(/[aeiou]/g)?.length ?? 0

module.exports = getCount
