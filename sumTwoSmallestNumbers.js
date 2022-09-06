const fn = require('./fn')

const sumTwoSmallestNumbers = fn.pipe(fn.sort(fn.sub), fn.slice(0, 2), fn.sum)

module.exports = sumTwoSmallestNumbers
