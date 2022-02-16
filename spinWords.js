const fn = require('./fn')

const spinWords = fn.mapWords(
  fn.branch(fn.pipe(fn.length, fn.gte(5)), fn.reverseStr)
)

module.exports = spinWords
