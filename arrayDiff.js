const fn = require('./fn')

const arrayDiff = (arr1, arr2) =>
  fn.filter(fn.pipe(fn.includes(arr2), fn.not))(arr1)

module.exports = arrayDiff
