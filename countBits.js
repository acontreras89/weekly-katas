const fn = require('./fn')

const countBits = fn.pipe(
  fn.toBinary,
  fn.toCharArray,
  fn.filter(fn.eq('1')),
  fn.length
)

// const countBits = n => n.toString(2).match(/1/g)?.length ?? 0

module.exports = countBits
